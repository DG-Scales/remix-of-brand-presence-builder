import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Palette } from "lucide-react";

const founders = [
  {
    name: "Founder One",
    role: "Co-Founder & Developer",
    bio: "Passionate about clean code and building robust digital products that make an impact.",
    icon: Code,
  },
  {
    name: "Founder Two",
    role: "Co-Founder & Designer",
    bio: "Creative thinker with an eye for design, focused on crafting beautiful and intuitive user experiences.",
    icon: Palette,
  },
];

function FounderCard({ founder, index }: { founder: typeof founders[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const Icon = founder.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="glass-card p-8 md:p-10 group hover:border-primary/30 transition-all duration-300"
    >
      <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
        <Icon className="w-7 h-7 text-primary" />
      </div>
      <div className="w-20 h-20 rounded-full bg-secondary mb-6 flex items-center justify-center">
        <span className="font-heading text-2xl font-bold text-muted-foreground">
          {founder.name.split(" ").map(w => w[0]).join("")}
        </span>
      </div>
      <h3 className="font-heading text-2xl font-bold text-foreground mb-1">{founder.name}</h3>
      <p className="text-primary font-medium text-sm mb-4">{founder.role}</p>
      <p className="text-muted-foreground leading-relaxed">{founder.bio}</p>
    </motion.div>
  );
}

export default function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-background relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm tracking-widest uppercase">Who We Are</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mt-3">
            Meet the Founders
          </h2>
          <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
            Two passionate creators building the future of digital experiences together.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {founders.map((founder, i) => (
            <FounderCard key={founder.name} founder={founder} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
