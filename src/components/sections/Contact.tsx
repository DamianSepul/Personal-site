import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { Section } from "../ui/Section";
import { Button } from "../ui/Button";
import { CONFIG } from "../../data/config";

export function Contact() {
  return (
    <Section id="contact" className="py-24 md:py-32 border-y-4 border-black bg-brutal-green">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto text-center px-4"
      >
        <h2 className="text-5xl md:text-8xl font-black font-heading uppercase text-black mb-8 leading-none tracking-tighter">
          Let's Work <br/>
          <span className="text-white relative">
            Together
            <svg className="absolute w-full h-full left-0 top-0 -z-10" viewBox="0 0 100 100" preserveAspectRatio="none">
              <rect width="100%" height="100%" fill="black" />
            </svg>
          </span>
        </h2>
        <p className="text-black text-xl font-medium mb-12 max-w-2xl mx-auto leading-relaxed">
          My inbox is always open. Whether you have a question or a project proposal, I'll try my best to get back to you!
        </p>

        <Button size="lg" className="h-16 px-12 text-lg rounded-2xl bg-brutal-yellow" asChild>
          <a href={CONFIG.socials.email}>
            <Mail className="mr-3 h-6 w-6 stroke-[3px]" />
            Say Hello
          </a>
        </Button>
      </motion.div>
    </Section>
  );
}
