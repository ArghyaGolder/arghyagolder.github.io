import { ArrowUpRight, Github, Linkedin } from "lucide-react";
import { site } from "../data/site";

export default function Contact() {
  return (
    <section id="contact" className="band bg-green">
      <div className="wrap grid gap-10 lg:grid-cols-[1.1fr_.9fr] lg:items-end">
        <h2 className="text-display-xl">Let's<br />talk<span className="text-pop">.</span></h2>
        <div>
          <p className="max-w-lg text-lg font-medium leading-8">Have a project in mind, need a website, or want to collaborate? Send me an email and tell me a little about it.</p>
          <a href={`mailto:${site.email}?subject=${encodeURIComponent("Let's work together")}`} className="mt-5 block break-all font-display text-display-sm underline decoration-[3px] underline-offset-4">
            {site.email}
          </a>
          <div className="mt-7 flex flex-wrap gap-4">
            <a className="btn btn-ink" href={`mailto:${site.email}`}>Email me <ArrowUpRight size={18} /></a>
            <a className="btn btn-white" href={site.github} target="_blank" rel="noreferrer"><Github size={18} /> GitHub</a>
            <a className="btn btn-white" href={site.linkedin} target="_blank" rel="noreferrer"><Linkedin size={18} /> LinkedIn</a>
          </div>
        </div>
      </div>
    </section>
  );
}
