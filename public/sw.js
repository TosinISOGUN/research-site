// Service worker: lets the site be installed and keeps pages you have visited available offline.
// Pages use the network first, so a deploy shows up on the next visit. Bump VERSION to clear old caches.
const VERSION = 'v1';
const PAGES = `pages-${VERSION}`;
const FILES = `files-${VERSION}`;

const PAGE_URLS = ['./', 'research.html', 'publications.html', 'teaching.html', 'cv.html', 'contact.html'];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(PAGES)
      .then((cache) => cache.addAll(PAGE_URLS))
      .then(() => self.skipWaiting()),
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== PAGES && k !== FILES).map((k) => caches.delete(k))))
      .then(() => self.clients.claim()),
  );
});

function store(cacheName, request, response) {
  // Only whole, successful responses can be cached (not partial PDF ranges or errors).
  if (response.ok && response.status === 200) {
    const copy = response.clone();
    caches.open(cacheName).then((cache) => cache.put(request, copy));
  }
  return response;
}

self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);
  if (request.method !== 'GET' || url.origin !== self.location.origin || request.headers.has('range')) return;

  // Pages: network first, fall back to the last copy, then to the home page.
  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then((response) => store(PAGES, request, response))
        .catch(() =>
          caches.match(request, { ignoreSearch: true }).then((hit) => hit || caches.match('./')),
        ),
    );
    return;
  }

  // Scripts, styles, fonts, images, PDFs: serve the cached copy at once and refresh it in the background.
  event.respondWith(
    caches.open(FILES).then((cache) =>
      cache.match(request).then((hit) => {
        const refresh = fetch(request)
          .then((response) => store(FILES, request, response))
          .catch(() => hit);
        event.waitUntil(refresh);
        return hit || refresh;
      }),
    ),
  );
});
