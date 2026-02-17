import { Link } from "react-router-dom";

const base =
  "inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 text-sm font-medium " +
  "transition duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-400/60";

export function Button({ children, className = "", ...props }) {
  return (
    <button
      className={`${base} bg-accent-500/90 hover:bg-accent-500 text-white shadow-soft ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export function ButtonGhost({ children, className = "", ...props }) {
  return (
    <button
      className={`${base} bg-white/5 hover:bg-white/8 border border-line text-white/90 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export function ButtonLink({ to, children, className = "" }) {
  return (
    <Link
      to={to}
      className={`${base} bg-white/5 hover:bg-white/8 border border-line text-white/90 ${className}`}
    >
      {children}
    </Link>
  );
}
