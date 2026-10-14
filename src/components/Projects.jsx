import { ArrowUpRight } from "lucide-react";
import { projects } from "../data/projects";
import SectionHeading from "./SectionHeading";
import ProjectShot from "./ProjectShot";

export default function Projects() {
  return (
    <section id="projects" className="band bg-pink">
      <div className="wrap">
        <SectionHeading title="Websites I've worked on">
          Personal projects and contributions to other projects. My involvement varied, from development and customization to improving specific sections and features.
        </SectionHeading>

        <div className="flex flex-col gap-16 sm:gap-24">
          {projects.map((p, i) => (
            <article key={p.name} className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
              <a
                href={p.url} target="_blank" rel="noreferrer" aria-label={`Open ${p.name} website`}
                className={`card block h-64 overflow-hidden bg-white shadow-brutal-lg transition-transform duration-300 hover:rotate-0 motion-reduce:transition-none sm:h-80 ${i % 2 ? "rotate-1 lg:order-2" : "-rotate-1"}`}
              >
                <ProjectShot project={p} />
              </a>
              <div>
                <span className="sticker bg-paper">{p.type}</span>
                <h3 className="mt-4 text-display-lg">{p.name}</h3>
                <p className="mt-4 max-w-md text-lg font-medium leading-7">{p.description}</p>
                <a href={p.url} target="_blank" rel="noreferrer" className="btn btn-ink mt-6">Visit website <ArrowUpRight size={18} /></a>
              </div>
            </article>
          ))}
        </div>

        <div className="card mt-20 flex flex-col items-start justify-between gap-6 bg-ink p-6 text-white sm:flex-row sm:items-center sm:p-10">
          <h3 className="text-display-md">Have a project in mind?</h3>
          <a href="#contact" className="btn btn-yellow text-ink">Let's collaborate <ArrowUpRight size={18} /></a>
        </div>
      </div>
    </section>
  );
}