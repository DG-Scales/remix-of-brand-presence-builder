import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProcessSection from "@/components/ProcessSection";
import ResultsSection from "@/components/ResultsSection";
import FAQSection from "@/components/FAQSection";
import SocialSection from "@/components/SocialSection";
import CalEmbed from "@/components/CalEmbed";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>DG Scales — Facebook & Instagram Ads Agency</title>
        <meta name="description" content="DG Scales runs high-performing Facebook & Instagram ad campaigns that drive leads, sales, and revenue growth. 3x avg ROAS, founder-led accounts." />
        <link rel="canonical" href="https://dgscales.lovable.app/" />
        <meta property="og:title" content="DG Scales — Facebook & Instagram Ads Agency" />
        <meta property="og:description" content="Scale your business with expert Meta ad campaigns. 3x avg ROAS, weekly reporting, founder-led." />
        <meta property="og:url" content="https://dgscales.lovable.app/" />
        <meta property="og:type" content="website" />
      </Helmet>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProcessSection />
      <ResultsSection />
      <FAQSection />
      <SocialSection />
      <CalEmbed />
      <Footer />
    </div>
  );
};

export default Index;
