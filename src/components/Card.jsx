export default function Card({ children, className = "" }) {
  return (
    <div
      className={`rounded-2xl border border-line bg-white/5 shadow-soft backdrop-blur-sm ${className}`}
    >
      {children}
    </div>
  );
}
