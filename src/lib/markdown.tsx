import { type ReactNode } from 'react';

// Inline Markdown helpers shared by the legal-document renderer.
// Supports the subset used in /docs: **bold**, [text](url) links and bare-email
// auto-linking. Kept in its own module (no component export) so the renderer
// component file stays fast-refresh friendly.

const linkClass =
  'font-semibold text-[#9FE264] underline decoration-[#7ED957]/40 underline-offset-4 transition hover:text-white';

// NOTE: this regex uses the global flag and is stateful (lastIndex). Because
// renderInline is recursive (bold text and link labels are parsed again), each
// call MUST have its own regex instance — a shared module-level regex would have
// its lastIndex reset by the recursion, causing the outer loop to rescan the
// same token forever (an infinite loop that freezes the browser tab).
const createInlinePattern = () =>
  /\*\*([^*]+)\*\*|\[([^\]]+)\]\(([^)]+)\)|([A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,})/g;

/** Parse inline Markdown (bold, links, bare emails) into React nodes. */
export function renderInline(text: string, keyPrefix = 'i'): ReactNode[] {
  const nodes: ReactNode[] = [];
  const pattern = createInlinePattern();
  let lastIndex = 0;
  let count = 0;
  let match: RegExpExecArray | null;

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index));
    }

    const key = `${keyPrefix}-${count}`;
    count += 1;

    if (match[1] !== undefined) {
      nodes.push(
        <strong key={key} className="font-semibold text-white">
          {renderInline(match[1], key)}
        </strong>,
      );
    } else if (match[2] !== undefined && match[3] !== undefined) {
      const href = match[3];
      const isExternal = /^https?:\/\//.test(href);
      nodes.push(
        <a
          key={key}
          href={href}
          className={linkClass}
          {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        >
          {renderInline(match[2], key)}
        </a>,
      );
    } else if (match[4] !== undefined) {
      const email = match[4];
      nodes.push(
        <a key={key} href={`mailto:${email}`} className={linkClass}>
          {email}
        </a>,
      );
    }

    lastIndex = pattern.lastIndex;
  }

  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex));
  }

  return nodes;
}
