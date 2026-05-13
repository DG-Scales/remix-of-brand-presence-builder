import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Search, PenTool, Rocket, LineChart } from "lucide-react";

const steps = [
  {
    n: "01",
    icon: Search,
    title: "Discovery & Audit",
    desc: "We dig into your offer, audience, current ad account, and competitors. You get a clear breakdown of what's working, what's leaking budget, and the path to scale.",
  },
  {
    n: "02",
    icon: PenTool,
    title: "Strategy & Creative",
    desc: "We build the campaign architecture, write conversion-focused copy, and produce static + video creative tailored to your brand and your buyer.",
  },
  {
    n: "03",
    icon: Rocket,
    title: "Launch & Optimize",
    desc: "Campaigns go live with proper tracking (Pixel + CAPI). We monitor daily, kill underperformers fast, and double down on the winners.",
  },
  {
    n: "04",
    icon: LineChart,
    title: "Scale & Report",
    desc: "Once we hit profitable benchmarks, we scale spend methodically and send you weekly reports so you always know your ROAS.",
  },
];

export default function ProcessSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="process" className="section-padding bg-secondary/30 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-medium text-sm tracking-widest uppercase">How We Work</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mt-3">
            A Proven 4-Step Process
          </h2>
          <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
            No guesswork. Every account follows the same battle-tested framework — built to find profit fast and scale it without breaking.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card p-7 relative group hover:border-primary/30 transition-all"
              >
                <span className="absolute top-5 right-6 font-heading text-5xl font-bold text-primary/10 group-hover:text-primary/20 transition-colors">
                  {s.n}
                </span>
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
