import { skillGroups } from "../data/skills";
import SectionHeading from "./SectionHeading";

const palette = ["bg-yellow", "bg-pink", "bg-green", "bg-orange"];

export default function Skills() {
  return (
    <section id="skills" className="band bg-blue">
      <div className="wrap">
        <SectionHeading title="My everyday stack">
          The tools I reach for to design, build, test and ship modern web experiences.
        </SectionHeading>
        <div className="grid gap-8 lg:grid-cols-[1.35fr_1fr]">
          {skillGroups.map((g, i) => {
            const dark = i === 1;
            return (
              <article key={g.title} className={`card p-6 sm:p-8 ${dark ? "bg-ink text-white lg:mt-10 lg:rotate-1" : "bg-paper"}`}>
                <h3 className="text-display-md">{g.title}</h3>
                <p className={`mt-2 max-w-sm text-sm leading-6 ${dark ? "text-white/70" : "text-ink/70"}`}>{g.description}</p>
                <ul className="mt-6 flex flex-wrap gap-3">
                  {g.skills.map((s, n) => (
                    <li key={s} className={`chip ${dark ? "bg-paper text-ink" : palette[n % palette.length]}`}>{s}</li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
