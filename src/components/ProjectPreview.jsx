// Lightweight CSS mockups instead of screenshots: zero image weight.
const previews = {
  crystal: {
    brand: "Crystal's Couture", links: ["Home", "Shop", "Collection"], eyebrow: "Timeless style", title: ["Styles for", "every you."], cta: "Shop now",
    bg: "bg-gradient-to-br from-[#fff2ed] to-[#e9bdb4] text-ink",
    shape: "rounded-t-full bg-gradient-to-br from-[#f7f2e8] to-[#d59a9e] border-2 border-ink/20",
  },
  rarree: {
    brand: "RARREE", links: ["Men", "Women", "Accessories"], eyebrow: "Contemporary", title: ["Indian", "wear."], cta: "Explore",
    bg: "bg-gradient-to-br from-[#9c7455] to-[#5e4538] text-white",
    shape: "rounded-t-[45%] bg-gradient-to-br from-[#5c3e2f] to-[#c3a080] border-2 border-white/25",
  },
  colada: {
    brand: "COLADA", links: ["Home", "Shop", "Collections"], eyebrow: "New collection", title: ["Wear your", "story."], cta: "Shop now",
    bg: "bg-gradient-to-br from-[#2d3036] to-[#171717] text-white",
    shape: "bg-[repeating-linear-gradient(135deg,#373b40_0_8px,#4d5258_8px_16px)] border-2 border-white/40",
  },
};

export default function ProjectPreview({ type }) {
  const p = previews[type];
  return (
    <div aria-hidden="true" className="flex h-full flex-col bg-white text-ink">
      <div className="flex h-10 items-center justify-between border-b-[3px] border-ink bg-paper px-4 text-xs font-bold">
        <span className="font-display text-sm">{p.brand}</span>
        <span className="hidden gap-4 sm:flex">{p.links.map((l) => <span key={l}>{l}</span>)}</span>
      </div>
      <div className={`relative flex flex-1 items-center overflow-hidden px-6 sm:px-10 ${p.bg}`}>
        <div className="relative z-10">
          <small className="text-xs font-bold tracking-widest">{p.eyebrow}</small>
          <strong className="mt-2 block font-display text-3xl font-normal leading-[.95] sm:text-5xl">
            {p.title.map((line) => <span key={line} className="block">{line}</span>)}
          </strong>
          <span className="mt-4 inline-block border-2 border-ink bg-paper px-3 py-1.5 text-xs font-extrabold text-ink">{p.cta}</span>
        </div>
        <div className={`absolute -bottom-4 right-[8%] h-40 w-28 rotate-6 sm:h-56 sm:w-40 ${p.shape}`} />
      </div>
    </div>
  );
}
