import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { CONFIG } from "../data/config";

export function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-950">
      <div className="container mx-auto max-w-6xl px-4 py-12 flex flex-col items-center gap-6">
        <div className="flex items-center gap-4">
          <a
            href={CONFIG.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-emerald-400 transition-colors"
          >
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </a>
          <a
            href={CONFIG.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-emerald-400 transition-colors"
          >
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </a>
          {CONFIG.socials.twitter && (
            <a
              href={CONFIG.socials.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-emerald-400 transition-colors"
            >
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </a>
          )}
          <a
            href={CONFIG.socials.email}
            className="text-zinc-400 hover:text-emerald-400 transition-colors"
          >
            <Mail className="h-5 w-5" />
            <span className="sr-only">Email</span>
          </a>
        </div>
        
        <p className="text-sm text-zinc-500 text-center">
          © {new Date().getFullYear()} {CONFIG.name}. Built with React & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
