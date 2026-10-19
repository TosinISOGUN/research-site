/** Resolves a path under /public so it works on any hosting sub-path. */
export function asset(path: string): string {
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`;
}
