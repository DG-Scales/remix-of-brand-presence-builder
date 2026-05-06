import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "var(--gradient-hero)" }}
    >
      {/* Floating shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-[10%] w-72 h-72 rounded-full bg-primary/5 animate-float" />
        <div className="absolute bottom-20 left-[5%] w-96 h-96 rounded-full bg-primary/3 animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 w-48 h-48 rounded-full bg-primary/5 animate-float" style={{ animationDelay: "4s" }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center pt-24">
        {/* Left - Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Welcome to DGScales
          </div>

          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] text-foreground">
            We Build
            <br />
            <span className="text-primary">Digital</span>
            <br />
            Experiences
          </h1>

          <p className="text-muted-foreground text-lg md:text-xl max-w-lg leading-relaxed">
            A creative duo crafting modern solutions and pushing the boundaries of what's possible in the digital space.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold text-base hover:opacity-90 transition-all hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5"
            >
              Contact Us
            </a>
            <a
              href="#about"
              className="bg-secondary text-secondary-foreground border border-border px-8 py-4 rounded-xl font-semibold text-base hover:bg-secondary/80 transition-all hover:-translate-y-0.5"
            >
              View Our Work
            </a>
          </div>
        </motion.div>

        {/* Right - Visual */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="hidden lg:flex justify-center"
        >
          <div className="relative">
            <div className="w-80 h-80 rounded-3xl bg-primary/10 border border-primary/20 flex items-center justify-center animate-float">
              <span className="font-heading text-8xl font-bold text-primary/30">DG</span>
            </div>
            <div className="absolute -top-6 -right-6 w-24 h-24 rounded-2xl bg-primary/20 animate-float" style={{ animationDelay: "1s" }} />
            <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-xl bg-primary/15 animate-float" style={{ animationDelay: "3s" }} />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a href="#about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
          <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
}
