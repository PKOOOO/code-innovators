"use client";
import React, { useState } from "react";
import { createPortal } from "react-dom";
import { cn } from "@/lib/utils";
import createGlobe from "cobe";
import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { IconBrandYoutubeFilled, IconX } from "@tabler/icons-react";

const FALLBACK_EDUCATION_IMAGE = "/eductaion.jpg";

const FALLBACK_HEALTH_VIDEO = "https://www.youtube.com/watch?v=Y6itOFy2508";

type Props = {
  educationImage?: string | null;
  healthVideoUrl?: string | null;
};

export default function FeaturesSectionDemo({ educationImage, healthVideoUrl }: Props) {
  const features = [
    {
      title: "Education",
      description:
        "Innovations to improve learning, access to education, teacher training, and literacy.",
      skeleton: <SkeletonOne image={educationImage ?? FALLBACK_EDUCATION_IMAGE} />,
      className:
        "col-span-1 lg:col-span-4 border-b lg:border-r dark:border-neutral-800",
    },
    {
      title: "Security",
      description:
        "Tech solutions for community safety, personal security, and cyber awareness.",
      skeleton: <SkeletonTwo />,
      className: "border-b col-span-1 lg:col-span-2 dark:border-neutral-800",
    },
    {
      title: "Health",
      description:
        "Projects addressing public health, access to healthcare, and disease prevention.",
      skeleton: <SkeletonThree videoUrl={healthVideoUrl ?? FALLBACK_HEALTH_VIDEO} />,
      className:
        "col-span-1 lg:col-span-3 lg:border-r dark:border-neutral-800",
    },
    {
      title: "Agriculture & Environment",
      description:
        "Innovations for sustainable farming, food security, climate change, waste management, and renewable energy — building a greener future.",
      skeleton: <SkeletonFour />,
      className: "col-span-1 lg:col-span-3 border-b lg:border-none",
    },
  ];

  return (
    <div className="relative z-10 bg-background w-full px-4 sm:px-6 md:px-12 lg:px-16" style={{ transform: "translateZ(0)" }}>
      <div className="relative z-20 mx-auto max-w-7xl py-10 lg:py-20">
        <div className="px-8">
          <h4 className="mx-auto max-w-5xl text-center text-3xl font-medium tracking-tight text-black lg:text-5xl lg:leading-tight dark:text-white">
            Problem-Solving Domains
          </h4>
          <p className="mx-auto my-4 max-w-2xl text-center text-sm font-normal text-neutral-500 lg:text-base dark:text-neutral-300">
            Pick a domain and build technology that drives real-world impact
            — across education, safety, health, agriculture, and the environment.
          </p>
        </div>

        <div className="relative">
          <div className="mt-12 grid grid-cols-1 rounded-md lg:grid-cols-6 xl:border dark:border-neutral-800">
            {features.map((feature) => (
              <FeatureCard key={feature.title} className={feature.className}>
                <FeatureTitle>{feature.title}</FeatureTitle>
                <FeatureDescription>{feature.description}</FeatureDescription>
                <div className="h-full w-full">{feature.skeleton}</div>
              </FeatureCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const FeatureCard = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn(`relative overflow-hidden p-4 sm:p-8`, className)}>
      {children}
    </div>
  );
};

const FeatureTitle = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p className="mx-auto max-w-5xl text-left text-xl tracking-tight text-black md:text-2xl md:leading-snug dark:text-white">
      {children}
    </p>
  );
};

const FeatureDescription = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p
      className={cn(
        "mx-auto max-w-4xl text-left text-sm md:text-base",
        "text-center font-normal text-neutral-500 dark:text-neutral-300",
        "mx-0 my-2 max-w-sm text-left md:text-sm",
      )}
    >
      {children}
    </p>
  );
};

export const SkeletonOne = ({ image }: { image: string }) => {
  return (
    <div className="relative flex h-full gap-10 px-2 py-8">
      <div className="group mx-auto h-full w-full bg-white p-5 shadow-2xl dark:bg-neutral-900">
        <div className="flex h-full w-full flex-1 flex-col space-y-2">
          <img
            src={image}
            alt="education"
            width={800}
            height={800}
            className="aspect-square h-full w-full rounded-sm object-cover object-center"
          />
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-40 h-60 w-full bg-gradient-to-t from-white via-white to-transparent dark:from-black dark:via-black" />
      <div className="pointer-events-none absolute inset-x-0 top-0 z-40 h-60 w-full bg-gradient-to-b from-white via-transparent to-transparent dark:from-black" />
    </div>
  );
};

// Fixed rotations to avoid SSR/hydration mismatch
const rotationsRow1 = [-3, 7, -5, 4, -8];
const rotationsRow2 = [6, -4, 8, -7, 3];

export const SkeletonTwo = () => {
  const images = [
    "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=2670&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2670&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2670&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=2670&auto=format&fit=crop",
  ];

  const imageVariants = {
    whileHover: { scale: 1.1, rotate: 0, zIndex: 100 },
    whileTap: { scale: 1.1, rotate: 0, zIndex: 100 },
  };

  return (
    <div className="relative flex h-full flex-col items-start gap-10 overflow-hidden p-8">
      <div className="-ml-20 flex flex-row">
        {images.map((image, idx) => (
          <motion.div
            variants={imageVariants}
            key={"sec-first-" + idx}
            style={{ rotate: rotationsRow1[idx % rotationsRow1.length] }}
            whileHover="whileHover"
            whileTap="whileTap"
            className="mt-4 -mr-4 shrink-0 overflow-hidden rounded-xl border border-neutral-100 bg-white p-1 dark:border-neutral-700 dark:bg-neutral-800"
          >
            <img
              src={image}
              alt="security"
              width="500"
              height="500"
              className="h-20 w-20 shrink-0 rounded-lg object-cover md:h-40 md:w-40"
            />
          </motion.div>
        ))}
      </div>
      <div className="flex flex-row">
        {images.map((image, idx) => (
          <motion.div
            key={"sec-second-" + idx}
            style={{ rotate: rotationsRow2[idx % rotationsRow2.length] }}
            variants={imageVariants}
            whileHover="whileHover"
            whileTap="whileTap"
            className="mt-4 -mr-4 shrink-0 overflow-hidden rounded-xl border border-neutral-100 bg-white p-1 dark:border-neutral-700 dark:bg-neutral-800"
          >
            <img
              src={image}
              alt="security"
              width="500"
              height="500"
              className="h-20 w-20 shrink-0 rounded-lg object-cover md:h-40 md:w-40"
            />
          </motion.div>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 z-[100] h-full w-20 bg-gradient-to-r from-white to-transparent dark:from-black" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-[100] h-full w-20 bg-gradient-to-l from-white to-transparent dark:from-black" />
    </div>
  );
};

function youtubeEmbedUrl(url: string): string {
  try {
    const parsed = new URL(url);
    const id =
      parsed.searchParams.get("v") ??
      parsed.pathname.split("/").filter(Boolean).pop() ??
      "";
    return `https://www.youtube.com/embed/${id}?autoplay=1`;
  } catch {
    return "";
  }
}

export const SkeletonThree = ({ videoUrl }: { videoUrl: string }) => {
  const [open, setOpen] = useState(false);
  const embedUrl = youtubeEmbedUrl(videoUrl);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="group/image relative flex h-full w-full cursor-pointer gap-10 border-0 bg-transparent p-0"
      >
        <div className="group mx-auto h-full w-full bg-transparent">
          <div className="relative flex h-full w-full flex-1 flex-col space-y-2">
            <IconBrandYoutubeFilled className="absolute inset-0 z-10 m-auto h-20 w-20 text-red-500" />
            <img
              src="/thumbnail.png"
              alt="health"
              width={800}
              height={800}
              className="aspect-square h-full w-full rounded-sm object-cover object-center blur-none transition-all duration-200 group-hover/image:blur-md"
            />
          </div>
        </div>
      </button>

      {typeof document !== "undefined" &&
        createPortal(
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[200] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
                onClick={() => setOpen(false)}
              >
                <motion.div
                  initial={{ scale: 0.92, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.92, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="relative w-full max-w-3xl"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    onClick={() => setOpen(false)}
                    className="absolute -top-10 right-0 flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
                  >
                    <IconX size={16} />
                  </button>
                  <div className="aspect-video w-full overflow-hidden rounded-xl shadow-2xl">
                    <iframe
                      src={embedUrl}
                      className="h-full w-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </>
  );
};

export const SkeletonFour = () => {
  return (
    <div className="relative mt-10 flex justify-center">
      <Globe />
    </div>
  );
};

export const Globe = ({ className: _className }: { className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    let phi = 0;
    let rafId: number;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 600 * 2,
      height: 600 * 2,
      phi: 0,
      theta: 0.3,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [0.1, 0.8, 1],
      glowColor: [1, 1, 1],
      markers: [],
    });

    function animate() {
      phi += 0.015;
      globe.update({ phi });
      rafId = requestAnimationFrame(animate);
    }
    rafId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafId);
      globe.destroy();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={600 * 2}
      height={600 * 2}
      style={{ width: "100%", maxWidth: 600, aspectRatio: "1 / 1" }}
    />
  );
};
