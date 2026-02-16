import Navigation from '@/components/Navigation';
import CustomCursor from '@/components/CustomCursor';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import ExperienceSection from '@/components/ExperienceSection';
import ThreeScene from '@/components/ThreeScene';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden">
      <CustomCursor />
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        {/* <ExperienceSection /> */}
        {/* <ThreeScene /> */}
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
