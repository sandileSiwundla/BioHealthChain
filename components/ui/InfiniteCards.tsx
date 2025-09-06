"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import { Github, Linkedin } from "lucide-react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    img: string;
    name: string;
    title: string;
    linkedin: string;
    github: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    addAnimation();
  }, []);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        scrollerRef.current?.appendChild(duplicatedItem);
      });
      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    containerRef.current?.style.setProperty(
      "--animation-direction",
      direction === "left" ? "forwards" : "reverse"
    );
  };

  const getSpeed = () => {
    let duration = "40s";
    if (speed === "fast") duration = "20s";
    else if (speed === "slow") duration = "80s";
    containerRef.current?.style.setProperty("--animation-duration", duration);
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 w-screen overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-16 py-4 w-max flex-nowrap",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            key={idx}
            className="w-[45vw] max-w-full relative rounded-2xl border border-slate-800 p-5 md:p-16 md:w-[30vw] bg-slate-800 backdrop-blur-2xl flex-shrink-0"
          >
            <div className="relative z-20 mt-6 flex flex-row items-center gap-4">
              {/* profile img */}
              <div>
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-16 h-16 rounded-full border border-white/20"
                />
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-xl font-bold text-white">{item.name}</span>
                <span className="text-sm text-white/70">{item.title}</span>
                <div className="flex gap-3 mt-1">
                  <a
                    href={item.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="w-5 h-5 text-white/80 hover:text-white" />
                  </a>
                  <a href={item.github} target="_blank" rel="noopener noreferrer">
                    <Github className="w-5 h-5 text-white/80 hover:text-white" />
                  </a>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}