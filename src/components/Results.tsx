import { useId } from 'react';
import type { ResultFigure, ResultTable, WorkResults } from '../types';
import { asset } from '../lib';
import { LinkRow } from './ExtLink';

function Figure({ figure }: { figure: ResultFigure }) {
  return (
    <figure className="figure">
      <a
        className={figure.photo ? 'figure__frame figure__frame--photo' : 'figure__frame'}
        href={asset(figure.src)}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={asset(figure.src)}
          alt={figure.alt}
          width={figure.width}
          height={figure.height}
          loading="lazy"
          decoding="async"
        />
      </a>
      <figcaption>{figure.caption}</figcaption>
    </figure>
  );
}

function DataTable({ table }: { table: ResultTable }) {
  const titleId = useId();
  return (
    <figure className="figure">
      {/* The title sits outside the scroll area so it stays readable on narrow screens. */}
      <p id={titleId} className="table-title">
        {table.caption}
      </p>
      {/* The wrapper scrolls sideways on narrow screens instead of squeezing the numbers. */}
      <div className="table-wrap" tabIndex={0} role="region" aria-labelledby={titleId}>
        <table className="data-table" aria-labelledby={titleId}>
          <thead>
            <tr>
              {table.columns.map((c) => (
                <th key={c} scope="col">
                  {c}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {table.rows.map((row, i) => (
              <tr key={row[0]} className={i === table.highlightRow ? 'is-highlight' : undefined}>
                {row.map((cell, j) =>
                  j === 0 ? (
                    <th key={j} scope="row">
                      {cell}
                    </th>
                  ) : (
                    <td key={j}>{cell}</td>
                  ),
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {table.note && <figcaption>{table.note}</figcaption>}
    </figure>
  );
}

/** Selected figures and tables for each piece of work. */
export function Results({ items }: { items: WorkResults[] }) {
  return (
    <div className="results">
      {items.map((w) => (
        <article key={w.id} className="results__work" aria-labelledby={`${w.id}-title`}>
          <h3 id={`${w.id}-title`} className="results__title">
            <em>“{w.title}”</em>
          </h3>
          <p>{w.summary}</p>
          {w.figures.map((f) => (
            <Figure key={f.src} figure={f} />
          ))}
          {w.tables.map((t) => (
            <DataTable key={t.caption} table={t} />
          ))}
          <p className="results__source">{w.source}</p>
          <LinkRow links={w.links} />
        </article>
      ))}
    </div>
  );
}
