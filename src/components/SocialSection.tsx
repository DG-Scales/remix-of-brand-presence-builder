import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);
const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);
const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);
const YoutubeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);
const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.73a8.19 8.19 0 004.76 1.52V6.8a4.84 4.84 0 01-1-.11z" />
  </svg>
);

const socials = [
  { name: "dg_scales Instagram", icon: InstagramIcon, url: "https://www.instagram.com/dg_scales/", color: "hover:text-pink-500" },
  { name: "DG Scales Facebook", icon: FacebookIcon, url: "https://www.facebook.com/profile.php?id=61573364082257", color: "hover:text-blue-500" },
  { name: "Devan Labbe TikTok", icon: TikTokIcon, url: "https://www.tiktok.com/@devan_labbe?_r=1&_t=ZP-96IiUtV6Au7", color: "hover:text-foreground" },
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
          <span className="text-accent font-medium text-sm tracking-widest uppercase">Follow Us</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mt-3 mb-4">
            Stay Connected
          </h2>
          <p className="text-muted-foreground text-lg mb-12 max-w-lg mx-auto">
            Follow our journey and stay up to date with our latest work and updates.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6">
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
