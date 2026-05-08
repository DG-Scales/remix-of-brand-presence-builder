import { ArrowUp } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.jpg";

const quickLinks = [
  { label: "Home", href: "/", isRoute: true },
  { label: "Services", href: "/#about", isRoute: true },
  { label: "Contact", href: "/contact", isRoute: true },
  { label: "Reviews", href: "/reviews", isRoute: true },
  { label: "Socials", href: "/#socials", isRoute: true },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card/50">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src={logo} alt="DGScales Logo" className="h-10 w-auto rounded" />
              <span className="font-heading font-bold text-xl text-foreground">DGScales</span>
            </div>
            <p className="text-muted-foreground text-sm max-w-xs leading-relaxed">
              Your growth partner for high-performing Facebook & Instagram ad campaigns that deliver real results.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">Get in Touch</h4>
            <p className="text-muted-foreground text-sm">dgsales.business@gmail.com</p>
            <p className="text-muted-foreground text-sm mt-2">Ready to scale? Let's talk ads.</p>
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
