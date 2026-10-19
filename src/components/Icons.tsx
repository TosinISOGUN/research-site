import type { ReactElement } from 'react';

// Small inline icons for the footer. They inherit the text colour and carry no label of their own:
// the link around each one provides the accessible name.

function Svg({ viewBox, children }: { viewBox: string; children: ReactElement }) {
  return (
    <svg className="icon" viewBox={viewBox} aria-hidden="true" focusable="false">
      {children}
    </svg>
  );
}

export function MailIcon() {
  return (
    <Svg viewBox="0 0 24 24">
      <path
        d="M3 6.75A1.75 1.75 0 0 1 4.75 5h14.5A1.75 1.75 0 0 1 21 6.75v10.5A1.75 1.75 0 0 1 19.25 19H4.75A1.75 1.75 0 0 1 3 17.25V6.75Zm1.9-.25L12 12.1l7.1-5.6H4.9Zm14.6 1.6-6.88 5.43a1 1 0 0 1-1.24 0L4.5 8.1v9.15c0 .14.11.25.25.25h14.5c.14 0 .25-.11.25-.25V8.1Z"
        fill="currentColor"
      />
    </Svg>
  );
}

export function GitHubIcon() {
  return (
    <Svg viewBox="0 0 16 16">
      <path
        d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"
        fill="currentColor"
      />
    </Svg>
  );
}

export function LinkedInIcon() {
  return (
    <Svg viewBox="0 0 24 24">
      <path
        d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065Zm1.782 13.019H3.555V9h3.564v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z"
        fill="currentColor"
      />
    </Svg>
  );
}

export function OrcidIcon() {
  return (
    <Svg viewBox="0 0 24 24">
      <path
        d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0ZM7.369 4.378c.525 0 .947.431.947.947s-.422.947-.947.947a.95.95 0 0 1-.947-.947c0-.525.422-.947.947-.947Zm-.722 3.038h1.444v10.041H6.647V7.416Zm3.562 0h3.9c3.712 0 5.344 2.653 5.344 5.025 0 2.578-2.016 5.025-5.325 5.025h-3.919V7.416Zm1.444 1.303v7.444h2.297c3.272 0 4.022-2.484 4.022-3.722 0-2.016-1.284-3.722-4.097-3.722h-2.222Z"
        fill="currentColor"
      />
    </Svg>
  );
}

/** Icon for a profile link, chosen by its label in src/data/profile.ts. Unknown labels have no icon. */
export const PROFILE_ICONS: Record<string, () => ReactElement> = {
  GitHub: GitHubIcon,
  LinkedIn: LinkedInIcon,
  ORCID: OrcidIcon,
};
