import { ArrowUp, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.jpg";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#about" },
  { label: "Contact", href: "/contact" },
  { label: "Reviews", href: "/reviews" },
  { label: "Socials", href: "/#socials" },
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
            <span className="text-accent font-medium text-xs tracking-widest uppercase">Navigate</span>
            <h4 className="font-heading font-semibold text-foreground mt-2 mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-muted-foreground hover:text-accent transition-colors text-sm w-fit"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <span className="text-accent font-medium text-xs tracking-widest uppercase">Contact</span>
            <h4 className="font-heading font-semibold text-foreground mt-2 mb-4">Get in Touch</h4>
            <a
              href="mailto:dgsales.business@gmail.com"
              className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors text-sm"
            >
              <Mail className="w-4 h-4 text-accent" />
              dgsales.business@gmail.com
            </a>
            <a
              href="tel:+16174802895"
              className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors text-sm mt-2"
            >
              <Phone className="w-4 h-4 text-accent" />
              (617) 480-2895
            </a>
            <Link
              to="/contact"
              className="btn-primary-glow inline-flex items-center justify-center text-primary-foreground px-5 py-2.5 rounded-lg text-sm font-semibold mt-5"
            >
              Start Your Project
            </Link>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between mt-12 pt-8 border-t border-border">
          <p className="text-muted-foreground text-sm">&copy; {new Date().getFullYear()} DGScales. All rights reserved.</p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="btn-secondary-glow mt-4 md:mt-0 p-3 rounded-full group"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4 text-accent group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
