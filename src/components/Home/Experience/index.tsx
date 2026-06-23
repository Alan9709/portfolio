"use client";
import React from "react";
import { experiences } from "../../../app/api/data";

const Experience = ({ showTitle = true }) => {
  return (
    <>
      <section id="experience" className="py-24">
        <div className="container mx-auto px-6">
          <div className="space-y-10">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-white dark:bg-zinc-900 rounded-2xl shadow-lg p-8 border border-zinc-200 dark:border-zinc-800"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                  <div>
                    <h3 className="text-2xl font-bold">{exp.role}</h3>

                    <p className="text-blue-600 font-semibold text-lg">
                      {exp.company}
                    </p>
                  </div>

                  <span className="text-sm text-gray-500 mt-2 md:mt-0">
                    {exp.period}
                  </span>
                </div>

                <ul className="mt-6 space-y-3">
                  {exp.achievements.map((item, i) => (
                    <li key={i} className="text-gray-600 dark:text-gray-400">
                      • {item}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mt-6">
                  {exp.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Experience;
