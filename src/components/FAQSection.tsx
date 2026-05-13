import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    q: "How much should I budget for ads?",
    a: "We typically recommend a minimum ad spend of $1,500–$3,000/month to gather meaningful data and scale profitably on Meta. We'll give you a clear recommendation based on your offer, margins, and goals on the discovery call.",
  },
  {
    q: "How fast will I see results?",
    a: "Most clients see initial conversions within the first 7–14 days. Profitable, predictable performance usually stabilizes by day 30–45 once we've finished the testing phase and identified winning creative + audiences.",
  },
  {
    q: "What industries do you work with?",
    a: "We specialize in construction, hardscaping, landscaping, and home improvement businesses — but we also work with e-commerce brands, local service companies, coaches, and high-ticket offers. If you have a proven offer and clear margins, we can help you scale it.",
  },
  {
    q: "Who creates the ad creative?",
    a: "You supply us with high-quality photos and videos of your work, and our team turns them into scroll-stopping ads — static images, short-form video, and UGC-style creative built for performance.",
  },
  {
    q: "How do I know my ads are actually working?",
    a: "You get a live KPI dashboard, weekly performance reports, and direct access to the founders via text/Slack. Full transparency — you'll always know your ROAS, CPA, and where every dollar is going.",
  },
];

export default function FAQSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="faq" className="section-padding bg-secondary/30 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-accent font-medium text-sm tracking-widest uppercase">FAQ</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mt-3">
            Common Questions
          </h2>
          <p className="text-muted-foreground text-lg mt-4">
            Everything you need to know before getting started.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-card p-2 md:p-6"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-border">
                <AccordionTrigger className="text-left font-heading text-base md:text-lg font-semibold text-foreground hover:text-accent hover:no-underline px-4">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed px-4 pb-5">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
