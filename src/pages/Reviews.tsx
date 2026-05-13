import { motion } from "framer-motion";
import { Star, ExternalLink } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Reviews = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24">
        <section className="section-padding">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <span className="text-accent font-medium text-sm tracking-widest uppercase">
                Reviews
              </span>
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mt-3">
                Love Working With Us?
              </h1>
              <p className="text-muted-foreground text-lg max-w-xl mx-auto leading-relaxed">
                We'd love to hear about your experience! Leave us a 5-star review on Google — it helps us grow and helps other businesses find us.
              </p>

              {/* Stars display */}
              <div className="flex justify-center gap-2 py-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <motion.div
                    key={star}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: star * 0.1 }}
                  >
                    <Star className="w-10 h-10 text-accent fill-[hsl(var(--accent))]" />
                  </motion.div>
                ))}
              </div>

              <motion.a
                href="https://g.page/r/CW445wl7HydyEAI/review"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="btn-primary-glow inline-flex items-center gap-3 text-primary-foreground px-8 py-4 rounded-xl font-semibold text-lg"
              >
                <Star className="w-5 h-5 fill-current" />
                Click 5 Stars ⭐⭐⭐⭐⭐ on Google
                <ExternalLink className="w-5 h-5" />
              </motion.a>

              <p className="text-muted-foreground text-sm">
                You'll be redirected to Google — just tap the 5th star and submit. Thank you!
              </p>
            </motion.div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Reviews;
