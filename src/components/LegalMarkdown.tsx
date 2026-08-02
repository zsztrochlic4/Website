import { AlertTriangle } from 'lucide-react';
import { Fragment, type ReactNode } from 'react';
import { renderInline } from '../lib/markdown';

// A small, purpose-built Markdown renderer for the StrengthHub legal documents.
// It intentionally supports only the subset of Markdown used in /docs:
//   #/##/### headings, - bullet lists, 1. numbered lists, **bold**,
//   [text](url) links, bare-email auto-linking, blockquotes (rendered as a
//   visually distinct callout box) and paragraphs with hard line breaks
//   (two trailing spaces). Keeping it in-house avoids a Markdown dependency
//   and gives full control over the dark/green brand styling.

/** Render a group of paragraph lines, honouring hard line breaks (two trailing spaces). */
function renderParagraphLines(lines: string[], keyPrefix: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  lines.forEach((line, index) => {
    const hardBreak = /\s{2,}$/.test(line);
    nodes.push(<Fragment key={`${keyPrefix}-l${index}`}>{renderInline(line.trim(), `${keyPrefix}-l${index}`)}</Fragment>);
    if (index < lines.length - 1) {
      nodes.push(hardBreak ? <br key={`${keyPrefix}-br${index}`} /> : ' ');
    }
  });
  return nodes;
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

const isBlank = (line: string) => line.trim() === '';
const isHeading = (line: string) => /^#{1,3}\s+/.test(line);
const isBullet = (line: string) => /^-\s+/.test(line);
const isOrdered = (line: string) => /^\d+\.\s+/.test(line);
const isQuote = (line: string) => /^>\s?/.test(line);

interface LegalMarkdownProps {
  markdown: string;
}

const LegalMarkdown = ({ markdown }: LegalMarkdownProps) => {
  const lines = markdown.replace(/\r\n/g, '\n').split('\n');
  const blocks: ReactNode[] = [];
  let i = 0;
  let key = 0;

  while (i < lines.length) {
    const line = lines[i];

    if (isBlank(line)) {
      i += 1;
      continue;
    }

    // Headings
    if (isHeading(line)) {
      const hashes = line.match(/^#+/)?.[0].length ?? 2;
      const text = line.replace(/^#{1,3}\s+/, '').trim();
      const blockKey = `b${key}`;
      key += 1;

      if (hashes === 1) {
        blocks.push(
          <h1 key={blockKey} className="text-3xl font-black leading-tight tracking-[-0.04em] text-white sm:text-4xl">
            {renderInline(text, blockKey)}
          </h1>,
        );
      } else if (hashes === 2) {
        blocks.push(
          <h2
            key={blockKey}
            id={slugify(text)}
            className="mt-12 scroll-mt-24 border-t border-white/[0.08] pt-10 text-2xl font-black tracking-[-0.025em] text-white sm:text-[1.7rem]"
          >
            {renderInline(text, blockKey)}
          </h2>,
        );
      } else {
        blocks.push(
          <h3 key={blockKey} id={slugify(text)} className="mt-8 scroll-mt-24 text-lg font-bold text-white">
            {renderInline(text, blockKey)}
          </h3>,
        );
      }
      i += 1;
      continue;
    }

    // Blockquote → emergency / important callout box
    if (isQuote(line)) {
      const quoteLines: string[] = [];
      while (i < lines.length && isQuote(lines[i])) {
        quoteLines.push(lines[i].replace(/^>\s?/, ''));
        i += 1;
      }
      const blockKey = `b${key}`;
      key += 1;
      blocks.push(
        <div
          key={blockKey}
          role="note"
          className="my-8 flex gap-4 rounded-2xl border border-[#7ED957]/30 bg-[#7ED957]/[0.08] p-5 shadow-[inset_0_0_40px_rgba(126,217,87,0.05)] sm:p-6"
        >
          <AlertTriangle className="mt-0.5 h-6 w-6 flex-none text-[#7ED957]" aria-hidden="true" />
          <p className="text-[15px] leading-7 text-white/90">{renderParagraphLines(quoteLines, blockKey)}</p>
        </div>,
      );
      continue;
    }

    // Unordered list
    if (isBullet(line)) {
      const items: string[] = [];
      while (i < lines.length && isBullet(lines[i])) {
        items.push(lines[i].replace(/^-\s+/, ''));
        i += 1;
      }
      const blockKey = `b${key}`;
      key += 1;
      blocks.push(
        <ul key={blockKey} className="mt-4 list-disc space-y-2 pl-6 marker:text-[#7ED957]">
          {items.map((item, index) => (
            <li key={`${blockKey}-${index}`}>{renderInline(item, `${blockKey}-${index}`)}</li>
          ))}
        </ul>,
      );
      continue;
    }

    // Ordered list
    if (isOrdered(line)) {
      const items: string[] = [];
      while (i < lines.length && isOrdered(lines[i])) {
        items.push(lines[i].replace(/^\d+\.\s+/, ''));
        i += 1;
      }
      const blockKey = `b${key}`;
      key += 1;
      blocks.push(
        <ol key={blockKey} className="mt-4 list-decimal space-y-2 pl-6 marker:font-semibold marker:text-[#7ED957]">
          {items.map((item, index) => (
            <li key={`${blockKey}-${index}`}>{renderInline(item, `${blockKey}-${index}`)}</li>
          ))}
        </ol>,
      );
      continue;
    }

    // Paragraph: gather consecutive non-blank, non-special lines
    const paragraphLines: string[] = [];
    while (
      i < lines.length &&
      !isBlank(lines[i]) &&
      !isHeading(lines[i]) &&
      !isBullet(lines[i]) &&
      !isOrdered(lines[i]) &&
      !isQuote(lines[i])
    ) {
      paragraphLines.push(lines[i]);
      i += 1;
    }
    const blockKey = `b${key}`;
    key += 1;
    blocks.push(
      <p key={blockKey} className="mt-5">
        {renderParagraphLines(paragraphLines, blockKey)}
      </p>,
    );
  }

  return <div className="text-base leading-8 text-white/[0.64]">{blocks}</div>;
};

export default LegalMarkdown;
