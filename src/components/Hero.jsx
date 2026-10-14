import { ArrowDownRight, ArrowUpRight, Terminal } from "lucide-react";
import { site } from "../data/site";

// Staggered entrance: --i sets the delay (see .rise in index.css)
const Rise = ({ i, as: Tag = "div", className = "", children }) => (
  <Tag className={`rise ${className}`} style={{ "--i": i }}>{children}</Tag>
);

export default function Hero() {
  return (
    <section id="home" className="dots overflow-hidden bg-yellow pb-20 pt-12 sm:pb-28 sm:pt-16">
      <div className="wrap grid items-center gap-14 lg:grid-cols-[1.25fr_.75fr]">
        <div>
          <Rise i={0} className="sticker mb-6 -rotate-2 bg-green">
            <span className="h-2.5 w-2.5 rounded-full bg-ink" /> Available for opportunities
          </Rise>
          <Rise as="h1" i={1} className="text-display-xl">
            Arghya<br /><span className="text-pop">Golder</span><span className="text-pink">.</span>
          </Rise>
          <Rise as="p" i={2} className="mt-8 max-w-xl text-xl font-medium leading-8">
            Full stack web developer building modern, useful and user-friendly web experiences, from first sketch to final deployment.
          </Rise>
          <Rise i={3} className="mt-8 flex flex-wrap gap-4">
            <a href="#projects" className="btn btn-ink">View my work <ArrowUpRight size={18} /></a>
            <a href={site.resume} download="Arghya-Golder-Resume.pdf" className="btn btn-white">Download resume <ArrowDownRight size={18} /></a>
          </Rise>
        </div>

        <Rise i={4} className="relative mx-auto w-full max-w-[440px]">
          <div className="card rotate-2 bg-ink p-4 text-white shadow-brutal-lg sm:p-5">
            <div className="flex items-center justify-between border-b border-white/20 pb-3">
              <div className="flex gap-1.5" aria-hidden="true">
                <span className="h-3 w-3 rounded-full bg-pink" /><span className="h-3 w-3 rounded-full bg-yellow" /><span className="h-3 w-3 rounded-full bg-green" />
              </div>
              <span className="font-mono text-xs text-white/60">arghya.dev</span>
              <Terminal size={16} className="text-yellow" />
            </div>
            <div className="py-6 font-mono text-sm leading-7 sm:text-base">
              <p className="text-white/60">// how I work</p>
              <p className="mt-2"><span className="text-pink">const</span> developer = {"{"}</p>
              <p className="pl-5"><span className="text-yellow">build</span>: <span className="text-green">"with purpose"</span>,</p>
              <p className="pl-5"><span className="text-yellow">learn</span>: <span className="text-green">"every day"</span>,</p>
              <p className="pl-5"><span className="text-yellow">ship</span>: <span className="text-green">"real things"</span></p>
              <p>{"};"}</p>
              <p className="mt-3 text-white/60"><span className="text-yellow">➜</span> run portfolio<span className="cursor">_</span></p>
            </div>
          </div>

          <span className="sticker absolute -left-3 -top-6 -rotate-6 bg-pink sm:-left-8">Design. Build. Ship.</span>
          <span
            aria-hidden="true"
            className="card absolute -bottom-7 -right-2 flex h-16 w-16 rotate-12 items-center justify-center bg-pink font-display text-2xl shadow-brutal-sm sm:-right-8 sm:h-20 sm:w-20 sm:text-3xl"
          >
            &lt;/&gt;
          </span>
        </Rise>
      </div>
    </section>
  );
}