import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Send, Phone } from "lucide-react";

export default function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="space-y-4"
    >
      <a href="tel:+16174802895" className="glass-card p-5 flex items-center gap-4 hover:border-primary/40 transition-colors text-left">
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
          <Phone className="w-5 h-5 text-primary" />
        </div>
        <div>
          <p className="text-sm text-muted-foreground">Phone</p>
          <p className="text-foreground font-medium">(617) 480-2895</p>
        </div>
      </a>
      <a href="mailto:dgsales.business@gmail.com" className="glass-card p-5 flex items-center gap-4 hover:border-primary/40 transition-colors text-left">
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
          <Send className="w-5 h-5 text-primary" />
        </div>
        <div>
          <p className="text-sm text-muted-foreground">Email</p>
          <p className="text-foreground font-medium break-all">dgsales.business@gmail.com</p>
        </div>
      </a>
    </motion.div>
  );
}
