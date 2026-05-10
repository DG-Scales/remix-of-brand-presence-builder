import { motion } from "framer-motion";
import { ArrowDown, TrendingUp, Target, BarChart3, Phone } from "lucide-react";
import { Link } from "react-router-dom";

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
            Facebook & Meta Ads Agency
          </div>

          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] text-foreground">
            Scale Your
            <br />
            <span className="gradient-text">Revenue</span>
            <br />
            With Ads
          </h1>

          <p className="text-muted-foreground text-lg md:text-xl max-w-lg leading-relaxed">
            We run high-performing Facebook & Instagram ad campaigns that drive real results. More leads, more sales, more growth — guaranteed.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="btn-primary-glow text-primary-foreground px-8 py-4 rounded-xl font-semibold text-base"
            >
              Get a Free Consultation
            </Link>
            <a
              href="#about"
              className="btn-secondary-glow px-8 py-4 rounded-xl font-semibold text-base"
            >
              See How It Works
            </a>
            <a
              href="tel:+16174802895"
              className="btn-secondary-glow inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-base"
            >
              <Phone className="w-4 h-4" /> Call (617) 480-2895
            </a>
          </div>

          {/* Stats row */}
          <div className="flex flex-wrap gap-8 pt-4">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-accent" />
              <span className="text-sm text-muted-foreground"><strong className="text-foreground">3x</strong> Avg. ROAS</span>
            </div>
            <div className="flex items-center gap-2">
              <Target className="w-5 h-5 text-accent" />
              <span className="text-sm text-muted-foreground"><strong className="text-foreground">100+</strong> Campaigns</span>
            </div>
            <div className="flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-accent" />
              <span className="text-sm text-muted-foreground"><strong className="text-foreground">$200K+</strong> Ad Spend Managed</span>
            </div>
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
              <span className="font-heading text-7xl font-bold text-primary/30">DGS</span>
            </div>
            <div className="absolute -top-6 -right-6 w-24 h-24 rounded-2xl bg-primary/20 animate-float flex items-center justify-center" style={{ animationDelay: "1s" }}>
              <TrendingUp className="w-10 h-10 text-primary/40" />
            </div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-xl bg-primary/15 animate-float flex items-center justify-center" style={{ animationDelay: "3s" }}>
              <Target className="w-7 h-7 text-primary/40" />
            </div>
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
