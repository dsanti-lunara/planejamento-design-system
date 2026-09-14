import React from 'react';
import { PaginationItem } from './PaginationItem.jsx';
import { IconChevronLeft } from '../icons/IconChevronLeft.jsx';
import { IconChevronRight } from '../icons/IconChevronRight.jsx';

// New — assembles PaginationItem into a real paginator (prev/next + numbered
// pages with ellipsis for long ranges). PaginationItem alone had no sequence,
// no arrows, and no logic to page through a real result set.
function pageList(current, total) {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);
  const pages = new Set([1, total, current, current - 1, current + 1]);
  const sorted = [...pages].filter((p) => p >= 1 && p <= total).sort((a, b) => a - b);
  const out = [];
  sorted.forEach((p, i) => {
    if (i > 0 && p - sorted[i - 1] > 1) out.push('…');
    out.push(p);
  });
  return out;
}

export function NavigationPagination(_p = {}) {
  const props = { ..._p, page: _p.page ?? 1, totalPages: _p.totalPages ?? 1 };
  const isControlled = _p.page !== undefined && !!_p.onPageChange;
  const [inner, setInner] = React.useState(props.page);
  const page = isControlled ? props.page : inner;
  const total = Math.max(1, props.totalPages);
  const go = (p) => {
    const next = Math.min(Math.max(1, p), total);
    if (!isControlled) setInner(next);
    props.onPageChange && props.onPageChange(next);
  };

  const arrowStyle = (disabled) => ({
    width: 36, height: 36, borderRadius: 7, border: "none",
    display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
    backgroundColor: "var(--color-surface-card)",
    boxShadow: "inset 0 0 0 1px var(--color-border-default)",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.45 : 1,
  });

  return (
    <nav aria-label="Pagination" className={props.className} style={{ display: "flex", alignItems: "center", gap: 6, ...props.style }}>
      <button type="button" aria-label="Página anterior" disabled={page <= 1} onClick={() => go(page - 1)} style={arrowStyle(page <= 1)}>
        <IconChevronLeft />
      </button>
      {pageList(page, total).map((p, i) => p === '…' ? (
        <span key={`e${i}`} style={{ width: 20, textAlign: "center", fontFamily: "var(--font-sans)", fontSize: 14, color: "var(--color-text-muted)" }}>…</span>
      ) : (
        <PaginationItem key={p} label={String(p)} state={p === page ? "current" : "default"} onClick={() => go(p)} />
      ))}
      <button type="button" aria-label="Próxima página" disabled={page >= total} onClick={() => go(page + 1)} style={arrowStyle(page >= total)}>
        <IconChevronRight />
      </button>
    </nav>
  );
}
export default NavigationPagination;
