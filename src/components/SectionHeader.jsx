export default function SectionHeader({ eyebrow, title, subtitle }) {
  return (
    <div className="mb-8">
      {eyebrow ? (
        <div className="text-xs uppercase tracking-[0.22em] text-accent-400/90">
          {eyebrow}
        </div>
      ) : null}
      <h2 className="mt-2 text-2xl sm:text-3xl font-semibold tracking-tight">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-3 max-w-2xl text-sm sm:text-base text-white/70">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
