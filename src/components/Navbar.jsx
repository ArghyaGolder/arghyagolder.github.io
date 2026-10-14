import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { navLinks, site } from "../data/site";

const ids = navLinks.map((l) => l.id);

// Highlights the nav link of the section currently in view
function useActiveSection() {
  const [active, setActive] = useState("");
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-40% 0px -55% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);
  return active;
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const active = useActiveSection();
  const close = () => setOpen(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && close();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b-[3px] border-ink bg-paper">
      <nav aria-label="Primary" className="wrap flex items-center justify-between gap-4 py-3">
        <a href="#home" onClick={close} className="font-display text-xl tracking-tight">
          {site.name}<span className="text-pink">.</span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map(({ label, id }) => (
            <a key={id} href={`#${id}`} aria-current={active === id ? "true" : undefined} className={`nav-link ${active === id ? "bg-yellow" : ""}`}>
              {label}
            </a>
          ))}
          <a href="#contact" className="btn btn-pink ml-3 min-h-10 py-2">Let's talk <ArrowUpRight size={16} /></a>
        </div>

        <button className="brutal-icon md:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)}>
          {open ? <X size={21} /> : <Menu size={21} />}
        </button>
      </nav>

      {open && (
        <div id="mobile-menu" className="wrap grid gap-1 pb-4 md:hidden">
          {navLinks.map(({ label, id }) => (
            <a key={id} href={`#${id}`} onClick={close} className="rounded-lg px-3 py-3 text-lg font-semibold hover:bg-yellow">{label}</a>
          ))}
          <a href="#contact" onClick={close} className="btn btn-ink mt-2">Let's talk <ArrowUpRight size={16} /></a>
        </div>
      )}
    </header>
  );
}
