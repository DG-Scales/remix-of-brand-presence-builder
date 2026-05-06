import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Instagram, Twitter, Youtube } from "lucide-react";

const socials = [
  { name: "Instagram", icon: Instagram, url: "https://instagram.com", color: "hover:text-pink-500" },
  { name: "Twitter / X", icon: Twitter, url: "https://x.com", color: "hover:text-foreground" },
  { name: "YouTube", icon: Youtube, url: "https://youtube.com", color: "hover:text-red-500" },
  {
    name: "TikTok",
    icon: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.73a8.19 8.19 0 004.76 1.52V6.8a4.84 4.84 0 01-1-.11z" />
      </svg>
    ),
    url: "https://tiktok.com",
    color: "hover:text-foreground",
  },
];

export default function SocialSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="socials" className="section-padding bg-secondary/30">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary font-medium text-sm tracking-widest uppercase">Follow Us</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mt-3 mb-4">
            Stay Connected
          </h2>
          <p className="text-muted-foreground text-lg mb-12 max-w-lg mx-auto">
            Follow our journey and stay up to date with our latest work and updates.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {socials.map((social, i) => {
            const Icon = social.icon;
            return (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className={`glass-card p-8 flex flex-col items-center gap-4 text-muted-foreground ${social.color} transition-all duration-300 group hover:-translate-y-1 hover:shadow-lg`}
              >
                <Icon />
                <span className="text-sm font-medium">{social.name}</span>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
