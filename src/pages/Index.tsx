import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import AssessmentFramework from "@/components/AssessmentFramework";
import AssessmentSections from "@/components/AssessmentSections";
import CareerOutcomes from "@/components/CareerOutcomes";
import CTASection from "@/components/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <AssessmentFramework />
      <AssessmentSections />
      <CareerOutcomes />
      <CTASection />
    </div>
  );
};

export default Index;
