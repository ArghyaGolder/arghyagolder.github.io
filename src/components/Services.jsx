import { ArrowUpRight, LayoutDashboard, PanelsTopLeft, ShoppingBag, Store } from "lucide-react";
import SectionHeading from "./SectionHeading";

const services = [
  {
    icon: PanelsTopLeft,
    title: "Business & portfolio websites",
    text: "Landing pages and multi-page sites for businesses, creators and freelancers.",
   
    hover: "hover:bg-yellow",
  },
  {
    icon: LayoutDashboard,
    title: "Web apps & dashboards",
    text: "React, Node and MongoDB apps with login, admin panels and forms that do real work.",
    
    hover: "hover:bg-green",
  },
  {
    icon: ShoppingBag,
    title: "E-commerce websites",
    text: "Product-led shopping experiences for online businesses.",
    
    hover: "hover:bg-pink",
  },
  {
    icon: Store,
    title: "WordPress & Shopify sites",
    text: "Manageable websites and online stores built for your needs.",
    
    hover: "hover:bg-orange",
  },
];

export default function Services() {
  return (
    <section id="services" className="band bg-paper">
      <div className="wrap">
        <SectionHeading title="What I can build for you">
          Thoughtful web development for people and businesses ready to move an idea forward.
        </SectionHeading>

        <div className="card shadow-brutal-lg">
          {services.map(({ icon: Icon, title, text, examples, hover }) => (
            <a
              key={title}
              href="#contact"
              className={`group grid items-center gap-4 border-b-[3px] border-ink px-5 py-6 transition-colors last:border-b-0 motion-reduce:transition-none sm:grid-cols-[auto_1fr_auto] sm:gap-8 sm:px-8 sm:py-7 ${hover}`}
            >
              <span className="flex h-14 w-14 items-center justify-center border-[3px] border-ink bg-paper"><Icon size={26} /></span>
              <div>
                <h3 className="text-display-md">{title}</h3>
                <p className="mt-1 max-w-xl font-medium text-ink/80">{text}</p>
               
              </div>
              <span className="hidden h-12 w-12 items-center justify-center rounded-full border-[3px] border-ink bg-paper transition-colors group-hover:bg-ink group-hover:text-white sm:flex"><ArrowUpRight /></span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}