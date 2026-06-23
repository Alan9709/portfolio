import React from "react";
import { skills } from "../../../app/api/data";

const Skills = () => {
  return (
    <>
      {/* Grid Container (matching your system style) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((group, index) => (
          <div
            key={index}
            className="border border-border dark:border-dark_border rounded-22 p-6 bg-transparent"
          >
            {/* Title */}
            <h2 className="text-[22px] font-bold text-secondary dark:text-white mb-5">
              {group.title}
            </h2>

            {/* Pills */}
            <div className="flex flex-wrap gap-2">
              {group.items.map((item, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-sm rounded-full border border-border dark:border-dark_border text-SlateBlueText dark:text-white/80 hover:bg-border dark:hover:bg-dark_border transition"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Skills;
