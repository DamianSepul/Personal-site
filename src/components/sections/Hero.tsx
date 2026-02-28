import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import { Button } from "../ui/Button";
import { Section } from "../ui/Section";
import { CONFIG } from "../../data/config";

export function Hero() {
  const container: any = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item: any = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 60, damping: 12 } },
  };

  return (
    <Section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center relative pt-24 pb-12 overflow-hidden"
    >
      {/* Decorative background */}
      <div className="absolute inset-0 pattern-dots pattern-black pattern-bg-transparent pattern-size-4 pattern-opacity-5 pointer-events-none" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="w-full max-w-6xl mx-auto text-center relative z-10 flex flex-col items-center gap-12"
      >
        {/* Main Name Badge */}
        <motion.div 
          variants={item}
          className="bg-brutal-yellow brutal-border brutal-shadow rounded-4xl w-full p-8 md:p-16 lg:p-24 relative overflow-hidden group"
        >
          <div className="absolute top-4 left-6">
            <span className="font-bold uppercase tracking-widest text-sm">Hello, my name is</span>
          </div>

          <h1 className="text-6xl sm:text-7xl md:text-[8rem] lg:text-[4rem] font-heading font-black uppercase text-black leading-none tracking-tighter mt-8 mb-4">
            {CONFIG.name}
          </h1>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-8">
            <h2 className="text-2xl md:text-3xl font-bold uppercase bg-white px-6 py-2 brutal-border transform -rotate-2">
              {CONFIG.title}
            </h2>
          </div>
        </motion.div>

        {/* Bio & Actions */}
        <motion.div variants={item} className="flex flex-col items-center max-w-2xl mx-auto gap-8">
          <p className="text-xl md:text-2xl font-medium text-black leading-relaxed">
            {CONFIG.description}
          </p>

          <div className="flex flex-wrap gap-6 justify-center">
            <Button size="lg" className="rounded-xl w-full sm:w-auto" asChild>
              <a href="#projects">
                View My Work
                <ArrowDownRight className="ml-2 h-6 w-6" strokeWidth={3} />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-xl w-full sm:w-auto bg-brutal-purple"
              asChild
            >
              <a href="#contact">Let's Talk</a>
            </Button>
          </div>
        </motion.div>

        {/* Tech Stack Marquee / Pills */}
        <motion.div variants={item} className="w-full mt-12">
          <p className="text-sm font-bold uppercase tracking-widest mb-6 divider">
            Stack
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {CONFIG.skills.slice(0, 10).map((skill) => (
              <span
                key={skill}
                className="px-5 py-3 bg-white brutal-border brutal-shadow-sm text-sm font-bold uppercase tracking-wide hover:-translate-y-1 hover:brutal-shadow transition-transform cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </Section>
  );
}
