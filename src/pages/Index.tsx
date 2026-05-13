import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProcessSection from "@/components/ProcessSection";
import ResultsSection from "@/components/ResultsSection";
import FAQSection from "@/components/FAQSection";
import SocialSection from "@/components/SocialSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProcessSection />
      <ResultsSection />
      <FAQSection />
      <SocialSection />
      <Footer />
    </div>
  );
};

export default Index;
