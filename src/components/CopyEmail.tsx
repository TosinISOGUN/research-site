import { useEffect, useRef, useState } from 'react';

/** Copies text with the Clipboard API, falling back to a hidden textarea where it is unavailable
 *  (older browsers, or pages opened over plain http). Returns whether the copy worked. */
async function copyText(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    const field = document.createElement('textarea');
    field.value = text;
    field.setAttribute('readonly', '');
    field.style.position = 'fixed';
    field.style.opacity = '0';
    document.body.appendChild(field);
    field.select();
    try {
      return document.execCommand('copy');
    } catch {
      return false;
    } finally {
      document.body.removeChild(field);
    }
  }
}

type State = 'idle' | 'copied' | 'failed';

export function CopyEmail({ email }: { email: string }) {
  const [state, setState] = useState<State>('idle');
  const timer = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  async function copy() {
    setState((await copyText(email)) ? 'copied' : 'failed');
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setState('idle'), 2200);
  }

  return (
    <>
      <button type="button" className="copy-email" onClick={copy} data-state={state}>
        <svg className="icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          {state === 'copied' ? (
            <path d="m5 12.5 4.5 4.5L19 7.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          ) : (
            <>
              <rect x="9" y="9" width="11" height="11" rx="2" fill="none" stroke="currentColor" strokeWidth="1.8" />
              <path d="M5 15V6a2 2 0 0 1 2-2h9" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </>
          )}
        </svg>
        {state === 'copied' ? 'Copied' : state === 'failed' ? 'Press Ctrl+C to copy' : 'Copy email'}
      </button>
      <span className="visually-hidden" role="status">
        {state === 'copied' ? 'Email address copied to the clipboard' : state === 'failed' ? 'Copy failed' : ''}
      </span>
    </>
  );
}
