import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import CalEmbed from "@/components/CalEmbed";
import ContactSection from "@/components/ContactSection";
import SocialSection from "@/components/SocialSection";
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
      <div className="pt-24">
        <CalEmbed />
        <ContactSection />
        <SocialSection />
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
