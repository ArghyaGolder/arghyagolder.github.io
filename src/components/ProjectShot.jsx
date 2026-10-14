import { useState } from "react";
import ProjectPreview from "./ProjectPreview";

// Real screenshot inside a browser frame. Falls back to the CSS mockup if the image is missing.
export default function ProjectShot({ project }) {
  const [failed, setFailed] = useState(false);
  if (!project.image || failed) return <ProjectPreview type={project.preview} />;

  const host = new URL(project.url).host.replace(/^www\./, "");
  return (
    <div className="flex h-full flex-col bg-white">
      <div className="flex h-10 shrink-0 items-center gap-3 border-b-[3px] border-ink bg-paper px-3">
        <div className="flex gap-1.5" aria-hidden="true">
          <span className="h-3 w-3 rounded-full border-2 border-ink bg-pink" />
          <span className="h-3 w-3 rounded-full border-2 border-ink bg-yellow" />
          <span className="h-3 w-3 rounded-full border-2 border-ink bg-green" />
        </div>
        <span className="min-w-0 flex-1 truncate border-2 border-ink bg-white px-3 py-0.5 font-mono text-xs">{host}</span>
      </div>
      <img
        src={project.image}
        alt={`${project.name} website screenshot`}
        width="1440"
        height="900"
        loading="lazy"
        onError={() => setFailed(true)}
        className="min-h-0 w-full flex-1 object-cover object-top"
      />
    </div>
  );
}