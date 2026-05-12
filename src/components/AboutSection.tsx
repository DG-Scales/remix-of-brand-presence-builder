import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Megaphone, BarChart3, Target, Zap } from "lucide-react";
import devanLabbeImg from "@/assets/devan-labbe.jpg";

const founders = [
  {
    name: "Devan Labbe",
    role: "Co-Founder — Client Relations, Sales & Creatives",
    bio: "Responsible for closing clients, leading collaborations, and customizing creatives and ad campaigns. Works hand-in-hand with every client — checking in regularly and staying on top of their needs and goals to ensure ads deliver real results.",
    icon: Zap,
    image: devanLabbeImg,
  },
  {
    name: "Giancarlos Minyetti",
    role: "Co-Founder — Operations, Finance & Strategy",
    bio: "Founder of DG Scales, overseeing the creative direction, strategy, and day-to-day operations behind the scenes. Focused on building impactful marketing campaigns, managing client growth, and ensuring every project runs smoothly from concept to execution.",
    icon: Megaphone,
    image: null as string | null,
  },
];

const services = [
  {
    title: "Facebook & Instagram Ads",
    description: "Full-funnel ad campaigns optimized for conversions, leads, and sales across Meta platforms.",
    icon: Megaphone,
  },
  {
    title: "Audience Targeting",
    description: "Precision targeting using custom audiences, lookalikes, and interest-based strategies to reach your ideal customer.",
    icon: Target,
  },
  {
    title: "Performance Analytics",
    description: "Transparent reporting and real-time dashboards so you always know exactly how your ads are performing.",
    icon: BarChart3,
  },
  {
    title: "Creative & Copywriting",
    description: "Thumb-stopping creatives and persuasive ad copy designed to maximize your click-through and conversion rates.",
    icon: Zap,
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
      {founder.image ? (
        <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden mb-6 border-2 border-accent/30 shadow-lg">
          <img src={founder.image} alt={founder.name} className="w-full h-full object-cover" />
        </div>
      ) : (
        <div className="w-40 h-40 md:w-48 md:h-48 rounded-full bg-secondary mb-6 flex items-center justify-center border-2 border-accent/30">
          <span className="font-heading text-5xl font-bold text-muted-foreground">
            {founder.name.split(" ").map(w => w[0]).join("")}
          </span>
        </div>
      )}
      <h3 className="font-heading text-2xl font-bold text-foreground mb-1">{founder.name}</h3>
      <p className="text-accent font-medium text-sm mb-4">{founder.role}</p>
      <p className="text-muted-foreground leading-relaxed">{founder.bio}</p>
    </motion.div>
  );
}

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const Icon = service.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-card p-6 md:p-8 group hover:border-primary/30 transition-all duration-300"
    >
      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <h3 className="font-heading text-lg font-bold text-foreground mb-2">{service.title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
    </motion.div>
  );
}

export default function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-background relative">
      <div className="max-w-7xl mx-auto">
        {/* Services */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-medium text-sm tracking-widest uppercase">What We Do</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mt-3">
            Ads That Actually Convert
          </h2>
          <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
            We handle everything — strategy, creatives, targeting, and optimization — so you can focus on running your business.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>

        {/* Founders */}
        <div className="text-center mb-16">
          <span className="text-accent font-medium text-sm tracking-widest uppercase">Who We Are</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mt-3">
            Meet the Founders
          </h2>
          <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
            Two ad specialists on a mission to help businesses scale profitably through paid advertising.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {founders.map((founder, i) => (
            <FounderCard key={founder.name} founder={founder} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
