import Card from "../../components/Card";
import Badge from "../../components/Badge";

export default function ProjectGrid({ items }) {
  return (
    <div className="grid gap-4 lg:grid-cols-3">
      {items.map((p) => (
        <Card key={p.id} className="p-6 hover:bg-white/6 transition">
          <div className="text-lg font-semibold tracking-tight">{p.title}</div>
          <div className="mt-1 text-sm text-white/60">{p.domain}</div>

          <div className="mt-4 text-sm text-white/70">
            <div className="font-medium text-white/85">Key outcomes</div>
            <ul className="mt-2 space-y-2">
              {p.highlights.map((h) => (
                <li key={h} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent-400/80" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-5">
            <div className="text-xs uppercase tracking-[0.22em] text-white/55">
              Stack
            </div>
            <div className="mt-2 flex flex-wrap gap-2">
              {p.stack.map((s) => (
                <Badge key={s}>{s}</Badge>
              ))}
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
