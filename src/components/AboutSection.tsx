import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Megaphone, BarChart3, Target, Zap } from "lucide-react";
import devanLabbeImg from "@/assets/devan-labbe.jpg";
import giancarlosImg from "@/assets/giancarlos-minyetti.jpg";

const founders = [
  {
    name: "Devan Labbe",
    role: "Co-Founder — Client Relations, Sales & Creatives",
    bio: "Devan leads client acquisition, partnerships, and the creative side of every campaign. He personally onboards each client, directs the ad creative, and stays in constant communication so messaging, offers, and visuals are dialed in. Known for closing high-ticket deals and turning cold prospects into long-term partners — he treats every account like it's his own business.",
    highlights: ["Client onboarding & strategy", "Creative direction", "Sales & partnerships"],
    icon: Zap,
    image: devanLabbeImg,
  },
  {
    name: "Giancarlos Minyetti",
    role: "Co-Founder — Operations, Finance & Strategy",
    bio: "Giancarlos founded DG Scales and runs the strategic engine behind it. He oversees campaign architecture, budget allocation, performance optimization, and the daily execution that keeps client accounts profitable. With a focus on scaling ad spend efficiently, he turns data into decisions that drive consistent ROI across every account we manage.",
    highlights: ["Media buying & scaling", "Performance optimization", "Operations & reporting"],
    icon: Megaphone,
    image: giancarlosImg,
  },
];

const services = [
  {
    title: "Facebook & Instagram Ads",
    description: "Full-funnel Meta campaigns engineered for conversions — from cold awareness to retargeting and retention. We build, launch, and optimize daily.",
    deliverables: ["Campaign build & launch", "Daily optimization", "A/B testing framework"],
    icon: Megaphone,
  },
  {
    title: "Audience Targeting",
    description: "Custom audiences, lookalikes, and interest stacks built from your customer data so every dollar reaches buyers most likely to convert.",
    deliverables: ["Custom & lookalike audiences", "Interest research", "Pixel & CAPI setup"],
    icon: Target,
  },
  {
    title: "Performance Analytics",
    description: "Transparent reporting with real-time dashboards. You always know your ROAS, CPA, CTR, and exactly where every dollar of ad spend is going.",
    deliverables: ["Live KPI dashboard", "Weekly performance reports", "Attribution tracking"],
    icon: BarChart3,
  },
  {
    title: "Creative & Copywriting",
    description: "Thumb-stopping static, video, and UGC-style creative paired with conversion-focused copy. New creative tested every week to fight ad fatigue.",
    deliverables: ["Static & video ads", "Hook & angle testing", "Conversion copywriting"],
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
