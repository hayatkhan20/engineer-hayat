export default function ProjectFilters({ tags, active, onChange }) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((t) => {
        const isActive = t === active;
        return (
          <button
            key={t}
            onClick={() => onChange(t)}
            className={[
              "rounded-full px-4 py-2 text-sm border transition",
              isActive
                ? "border-accent-400/60 bg-accent-500/15 text-white"
                : "border-line bg-white/5 text-white/75 hover:bg-white/8"
            ].join(" ")}
          >
            {t}
          </button>
        );
      })}
    </div>
  );
}
