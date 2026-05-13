import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { TrendingUp, DollarSign, Users, Target } from "lucide-react";

const stats = [
  { icon: TrendingUp, value: "3.2x", label: "Average ROAS", sub: "across managed accounts" },
  { icon: DollarSign, value: "$200K+", label: "Ad Spend Managed", sub: "profitably deployed" },
  { icon: Users, value: "100+", label: "Campaigns Launched", sub: "across Meta platforms" },
  { icon: Target, value: "48hr", label: "Launch Time", sub: "from kickoff to live ads" },
];

const testimonials = [
  {
    quote: "DG Scales took our Meta ads from breakeven to a consistent 4x ROAS in under 60 days. The creative they produce is on another level.",
    name: "E-commerce Brand Owner",
    role: "DTC Apparel",
  },
  {
    quote: "Communication is unmatched. Devan checks in constantly, and Giancarlos's strategy completely changed how we think about scaling spend.",
    name: "Local Service Business",
    role: "Home Services",
  },
  {
    quote: "We tried three agencies before DG Scales. They were the first to actually understand our offer and deliver leads that closed.",
    name: "Coaching Client",
    role: "High-Ticket Coach",
  },
];

export default function ResultsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="results" className="section-padding bg-background relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-medium text-sm tracking-widest uppercase">The Numbers</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mt-3">
            Results That Speak For Themselves
          </h2>
          <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
            Real performance, transparent reporting. Here's what we've delivered across our client portfolio.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
          {stats.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card p-6 md:p-8 text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <div className="font-heading text-4xl md:text-5xl font-bold gradient-text mb-2">{s.value}</div>
                <div className="text-foreground font-semibold text-sm">{s.label}</div>
                <div className="text-muted-foreground text-xs mt-1">{s.sub}</div>
              </motion.div>
            );
          })}
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
              className="glass-card p-7 flex flex-col"
            >
              <p className="text-foreground leading-relaxed mb-5 text-sm md:text-base">"{t.quote}"</p>
              <footer className="mt-auto pt-4 border-t border-border">
                <div className="font-semibold text-foreground text-sm">{t.name}</div>
                <div className="text-muted-foreground text-xs">{t.role}</div>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
