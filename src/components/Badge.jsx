export default function Badge({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-line bg-white/5 px-3 py-1 text-xs text-white/80">
      {children}
    </span>
  );
}
