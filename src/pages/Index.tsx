
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { SectionDivider } from "@/components/ui/section-divider";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <SectionDivider />
        <ProjectsSection />
        <SectionDivider />
        <AboutSection />
        <SectionDivider />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
