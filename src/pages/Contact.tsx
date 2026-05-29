import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import CalEmbed from "@/components/CalEmbed";
import Footer from "@/components/Footer";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Contact DG Scales — Get a Free Strategy Call</title>
        <meta name="description" content="Get in touch with DG Scales for a free Facebook & Instagram ads strategy call. We respond within 24 hours." />
        <link rel="canonical" href="https://dgscales.lovable.app/contact" />
        <meta property="og:title" content="Contact DG Scales — Get a Free Strategy Call" />
        <meta property="og:description" content="Book a free Meta ads strategy call with the DG Scales team." />
        <meta property="og:url" content="https://dgscales.lovable.app/contact" />
        <meta property="og:type" content="website" />
      </Helmet>
      <Navbar />
      <div className="pt-24 pb-16">
        <section className="section-padding relative">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-accent font-medium text-sm tracking-widest uppercase">Contact</span>
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mt-3">
                Let's Scale Your Ads
              </h1>
              <p className="text-muted-foreground text-lg mt-4 max-w-md mx-auto leading-relaxed">
                Ready to scale your business with Facebook ads? Pick a time below and we'll hop on a free strategy call.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 items-start">
              <div className="lg:col-span-2">
                <CalEmbed showHeading={false} className="!py-0" />
              </div>
              <div className="lg:col-span-1">
                <div className="glass-card p-6 rounded-2xl">
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-4">
                    Reach Out Directly
                  </h3>
                  <ContactSection />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
