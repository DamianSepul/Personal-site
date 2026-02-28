import { motion } from "framer-motion";
import { Github, ExternalLink, ArrowUpRight } from "lucide-react";
import { Section } from "../ui/Section";
import { CONFIG } from "../../data/config";

export function Projects() {
  const cardColors = ["bg-white", "bg-brutal-purple/30", "bg-brutal-green/30", "bg-brutal-salmon/30", "bg-brutal-yellow/30", "bg-white"];
  
  return (
    <Section id="projects" className="py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b-4 border-black pb-8"
      >
        <div>
          <h2 className="text-5xl md:text-7xl font-heading font-black uppercase text-black tracking-tighter mb-4">
            Featured <br/> <span className="text-brutal-purple">_</span>Projects
          </h2>
          <p className="text-xl font-medium text-black max-w-2xl">
            A selection of my recent works.
          </p>
        </div>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        {CONFIG.projects.map((project, index) => {
          const bgColor = cardColors[index % cardColors.length];
          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative rounded-[2rem] border-4 border-black brutal-shadow ${bgColor} p-6 sm:p-8 hover:-translate-y-2 hover:-translate-x-2 transition-transform duration-300 flex flex-col h-full`}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-8 group-hover:px-2 transition-all">
                <h3 className="text-3xl sm:text-4xl font-black font-heading uppercase text-black">
                  {project.title}
                </h3>
                
                <div className="flex gap-3">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white p-2 brutal-border brutal-shadow-sm hover:brutal-shadow-hover hover:bg-brutal-yellow transition-all rounded-xl text-black"
                    >
                      <Github className="h-6 w-6 stroke-[2.5px]" />
                      <span className="sr-only">GitHub</span>
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white p-2 brutal-border brutal-shadow-sm hover:brutal-shadow-hover hover:bg-brutal-salmon transition-all rounded-xl text-black"
                    >
                      <ArrowUpRight className="h-6 w-6 stroke-[3px]" />
                      <span className="sr-only">Live Demo</span>
                    </a>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 group-hover:px-2 transition-all">
                <p className="text-lg font-medium text-black leading-relaxed mb-8">
                  {project.description}
                </p>
              </div>

              {/* Footer / Tags */}
              <ul className="flex flex-wrap gap-3 mt-auto group-hover:px-2 transition-all">
                {project.tags.map((tag) => (
                  <li
                    key={tag}
                    className="text-xs sm:text-sm font-bold uppercase tracking-wide text-black bg-white border-2 border-black px-3 py-1.5 rounded-lg brutal-shadow-sm"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
