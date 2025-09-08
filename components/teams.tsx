import * as React from "react";
import { team } from "@/data";
import { InfiniteMovingCards } from "./ui/InfiniteCards";

const Clients = () => {
  return (
    <section id="team" className="py-20">

      <div className="flex flex-col items-center max-lg:mt-10">
        <div
          // remove bg-white dark:bg-black dark:bg-grid-white/[0.05], h-[40rem] to 30rem , md:h-[30rem] are for the responsive design
          className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden"
          
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-5 tracking-wide">
          Meet the team
          </h2>
          
          <InfiniteMovingCards
            items={team}
            direction="right"
            speed="slow"
          />
        </div>

      </div>
    </section>
  );
};

export default Clients;
