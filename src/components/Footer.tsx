import { ArrowUp } from "lucide-react";
import logo from "@/assets/logo.jpg";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
  { label: "Socials", href: "#socials" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card/50">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src={logo} alt="DG Logo" className="h-10 w-auto rounded" />
              <span className="font-heading font-bold text-xl text-foreground">DGScales</span>
            </div>
            <p className="text-muted-foreground text-sm max-w-xs leading-relaxed">
              A creative duo building modern digital experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">Get in Touch</h4>
            <p className="text-muted-foreground text-sm">dgsales.business@gmail.com</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between mt-12 pt-8 border-t border-border">
          <p className="text-muted-foreground text-sm">&copy; {new Date().getFullYear()} DGScales. All rights reserved.</p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="mt-4 md:mt-0 p-3 rounded-full bg-secondary hover:bg-secondary/80 transition-colors group"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4 text-foreground group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
