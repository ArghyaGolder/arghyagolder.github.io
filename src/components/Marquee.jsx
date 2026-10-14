import { FaCss3Alt } from "react-icons/fa6";
import { VscVscode } from "react-icons/vsc";
import {
  SiCloudinary, SiExpress, SiFigma, SiGit, SiGithub, SiHtml5, SiJavascript, SiMongodb, SiNetlify,
  SiNextdotjs, SiNodedotjs, SiPostman, SiReact, SiShadcnui, SiShopify, SiTailwindcss, SiTypescript,
  SiVercel, SiVite, SiWordpress,
} from "react-icons/si";
import { skillGroups } from "../data/skills";

// react-icons has no Canva logo, so this is a small custom mark in Canva's teal
const CanvaMark = ({ size = 28 }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden="true">
    <circle cx="16" cy="16" r="16" fill="#00C4CC" />
    <text x="16" y="22.5" textAnchor="middle" fontSize="19" fontWeight="700" fontStyle="italic" fill="#fff" fontFamily="system-ui, sans-serif">C</text>
  </svg>
);

// skill name -> [logo, brand color]. Dark brand logos use white so they show on the black strip.
const logos = {
  "HTML5": [SiHtml5, "#E34F26"],
  "CSS3": [FaCss3Alt, "#2D8CFF"],
  "JavaScript (ES6+)": [SiJavascript, "#F7DF1E"],
  "TypeScript": [SiTypescript, "#3178C6"],
  "React.js": [SiReact, "#61DAFB"],
  "Next.js": [SiNextdotjs, "#FFFFFF"],
  "Tailwind CSS": [SiTailwindcss, "#06B6D4"],
  "shadcn/ui": [SiShadcnui, "#FFFFFF"],
  "Vite": [SiVite, "#8B8EFF"],
  "Node.js": [SiNodedotjs, "#5FA04E"],
  "Express.js": [SiExpress, "#FFFFFF"],
  "MongoDB": [SiMongodb, "#47A248"],
  "WordPress": [SiWordpress, "#4AA3D6"],
  "Shopify": [SiShopify, "#7AB55C"],
  "Git": [SiGit, "#F05032"],
  "GitHub": [SiGithub, "#FFFFFF"],
  "VS Code": [VscVscode, "#3B9CFF"],
  "Figma": [SiFigma, "#F24E1E"],
  "Canva": [CanvaMark, null],
  "Postman": [SiPostman, "#FF6C37"],
  "Vercel": [SiVercel, "#FFFFFF"],
  "Netlify": [SiNetlify, "#00C7B7"],
  "Cloudinary": [SiCloudinary, "#5C7CFA"],
};

const items = skillGroups.flatMap((g) => g.skills);

// Endless ticker of the stack. Content is rendered twice so the -50% loop is seamless.
export default function Marquee() {
  return (
    <div className="relative z-10 -my-3 overflow-hidden" aria-hidden="true">
      <div className="-ml-[5%] w-[110%] -rotate-1 border-y-[3px] border-ink bg-ink py-3.5 text-white">
        <div className="flex w-max animate-marquee">
          {[0, 1].map((n) => (
            <div key={n} className="flex shrink-0 items-center">
              {items.map((name) => {
                const [Logo, color] = logos[name] ?? [];
                return (
                  <span key={name} className="flex items-center gap-3 px-6 font-display text-xl sm:px-8 sm:text-2xl">
                    {Logo && <Logo size={28} color={color ?? undefined} className="shrink-0" />}
                    {name}
                  </span>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}