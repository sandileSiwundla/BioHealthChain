"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState, useRef } from "react";
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
  const [isPaused, setIsPaused] = useState(false);

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

  const handleMouseEnter = () => {
    if (pauseOnHover) {
      setIsPaused(true);
    }
  };

  const handleMouseLeave = () => {
    if (pauseOnHover) {
      setIsPaused(false);
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 w-screen overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]",
        className
      )}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-15 py-4 w-max flex-nowrap",
          start && "animate-scroll",
          isPaused && "animation-play-state-paused"
        )}
        style={{
          animationPlayState: isPaused ? "paused" : "running",
        }}
      >
        {items.map((item, idx) => (
          <li
            key={idx}
            className="w-[70vw] sm:w-[50vw] md:w-[35vw] lg:w-[30vw] xl:w-[25vw] max-w-full relative rounded-2xl border border-black p-5 md:p-8 bg-[#1E3A8A] flex-shrink-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <div className="relative z-20 flex flex-row items-center gap-6">
              {/* profile img */}
              <div className="flex-shrink-0">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-white object-cover"
                />
              </div>

              {/* text */}
              <div className="flex flex-col">
                <span className="text-lg md:text-xl font-bold text-white">
                  {item.name}
                </span>
                <span className="text-sm text-white/90 mt-1">{item.title}</span>
                <div className="flex gap-3 mt-3">
                  <a
                    href={item.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white/20 rounded-full hover:bg-black transition-colors"
                  >
                    <Linkedin className="w-4 h-4 md:w-5 md:h-5 text-white" />
                  </a>
                  <a
                    href={item.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white/20 rounded-full hover:bg-black transition-colors"
                  >
                    <Github className="w-4 h-4 md:w-5 md:h-5 text-white" />
                  </a>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
      
      <style jsx>{`
        .animation-play-state-paused {
          animation-play-state: paused;
        }
        
        @keyframes scrollLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        .animate-scroll {
          animation: scrollLeft var(--animation-duration, 40s) linear infinite;
          animation-direction: var(--animation-direction, forwards);
        }
        
        @media (max-width: 640px) {
          .animate-scroll {
            animation-duration: calc(var(--animation-duration, 40s) * 1.5);
          }
        }
      `}</style>
    </div>
  );
};