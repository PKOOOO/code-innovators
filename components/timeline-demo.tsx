import React from "react";
import { client } from "@/sanity/lib/client";
import { timelineQuery } from "@/sanity/lib/queries";
import { Timeline } from "@/components/ui/timeline";

const IMG_CLASS =
  "h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60";

interface TimelinePhase {
  _id: string;
  title: string;
  description: string;
  images: string[] | null;
  order: number;
}

// Fallback images shown when no images have been added in Sanity yet
const FALLBACK_IMAGES = [
  "https://assets.aceternity.com/templates/startup-1.webp",
  "https://assets.aceternity.com/templates/startup-2.webp",
  "https://assets.aceternity.com/templates/startup-3.webp",
  "https://assets.aceternity.com/templates/startup-4.webp",
];

// Fallback phases shown when no documents exist in Sanity yet
const FALLBACK_PHASES: TimelinePhase[] = [
  {
    _id: "fallback-1",
    title: "May - August 2026",
    description: "Schools can register their teams and submit project proposals",
    images: FALLBACK_IMAGES,
    order: 1,
  },
  {
    _id: "fallback-2",
    title: "August - September 2026",
    description: "Teams work on their projects with mentor support",
    images: FALLBACK_IMAGES,
    order: 2,
  },
  {
    _id: "fallback-3",
    title: "27 September",
    description: "Competition Day — Projects judged and winners announced",
    images: FALLBACK_IMAGES,
    order: 3,
  },
];

export default async function TimelineDemo() {
  const phases: TimelinePhase[] = await client
    .fetch(timelineQuery)
    .catch(() => []);

  const resolvedPhases = phases.length > 0 ? phases : FALLBACK_PHASES;

  const data = resolvedPhases.map((phase) => {
    const images =
      phase.images && phase.images.length > 0
        ? phase.images
        : FALLBACK_IMAGES;

    return {
      title: phase.title,
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            {phase.description}
          </p>
          <div className="grid grid-cols-2 gap-4">
            {images.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`${phase.title} image ${i + 1}`}
                width={500}
                height={500}
                className={IMG_CLASS}
              />
            ))}
          </div>
        </div>
      ),
    };
  });

  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}
