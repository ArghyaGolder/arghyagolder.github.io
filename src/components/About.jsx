import { Lightbulb, Puzzle, Users, Zap } from "lucide-react";

const strengths = [
  { icon: Puzzle, label: "Problem solver", style: "bg-yellow -rotate-3" },
  { icon: Zap, label: "Curious builder", style: "bg-pink rotate-2" },
  { icon: Users, label: "Team contributor", style: "bg-green -rotate-1" },
  { icon: Lightbulb, label: "Always learning", style: "bg-orange rotate-3" },
];

export default function About() {
  return (
    <section id="about" className="band bg-paper">
      <div className="wrap grid gap-12 lg:grid-cols-[1.3fr_.7fr] lg:items-center">
        <div>
          <h2 className="text-display-lg">A developer who cares about <span className="mark">real impact.</span></h2>
          <p className="mt-6 max-w-xl text-lg font-medium leading-8 text-ink/80">
            I enjoy building clean interfaces and practical web applications. I like learning new tools, solving problems and collaborating with others to turn ideas into working products.
          </p>
        </div>
        <ul className="flex flex-wrap gap-4 lg:flex-col lg:items-start">
          {strengths.map(({ icon: Icon, label, style }) => (
            <li key={label} className={`sticker text-base ${style}`}><Icon size={18} />{label}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
