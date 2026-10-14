import { ArrowUpRight } from "lucide-react";
import { navLinks, site } from "../data/site";

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto flex w-[min(1180px,calc(100%-2rem))] flex-col gap-6 py-8 sm:flex-row sm:items-center sm:justify-between">
        <a href="#home" className="font-display text-xl">{site.name}<span className="text-pink">.</span></a>
        <nav aria-label="Footer" className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-white/80">
          {navLinks.map(({ label, id }) => <a key={id} href={`#${id}`} className="transition-colors hover:text-yellow">{label}</a>)}
        </nav>
        <a href="#home" className="inline-flex items-center gap-2 text-sm font-semibold hover:text-yellow">Back to top <ArrowUpRight size={15} /></a>
      </div>
      <div className="border-t border-white/15">
        <p className="mx-auto w-[min(1180px,calc(100%-2rem))] py-4 text-xs text-white/60">© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}
