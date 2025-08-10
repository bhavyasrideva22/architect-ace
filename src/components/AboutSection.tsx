import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Lock, Network, FileText, Cloud } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="section-background py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What is a <span className="glow-text">Security Architect?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A Security Architect designs, builds, and maintains the security infrastructure to protect an organization's IT assets. They anticipate risks, develop security policies, implement controls, and ensure compliance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          <Card className="assessment-card">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <CardTitle>Security Architect</CardTitle>
              <CardDescription>Design comprehensive security frameworks and infrastructure</CardDescription>
            </CardHeader>
          </Card>

          <Card className="assessment-card">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                <Lock className="w-6 h-6 text-primary" />
              </div>
              <CardTitle>Cybersecurity Consultant</CardTitle>
              <CardDescription>Provide expert security guidance and risk assessments</CardDescription>
            </CardHeader>
          </Card>

          <Card className="assessment-card">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                <Network className="w-6 h-6 text-primary" />
              </div>
              <CardTitle>Network Security Engineer</CardTitle>
              <CardDescription>Secure network infrastructure and communications</CardDescription>
            </CardHeader>
          </Card>

          <Card className="assessment-card">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-primary" />
              </div>
              <CardTitle>IT Security Manager</CardTitle>
              <CardDescription>Lead security teams and develop organizational policies</CardDescription>
            </CardHeader>
          </Card>

          <Card className="assessment-card">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                <Cloud className="w-6 h-6 text-primary" />
              </div>
              <CardTitle>Cloud Security Specialist</CardTitle>
              <CardDescription>Secure cloud environments and hybrid infrastructures</CardDescription>
            </CardHeader>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="assessment-card">
            <CardHeader>
              <CardTitle className="text-2xl">Success Traits</CardTitle>
              <CardDescription>Key characteristics of successful Security Architects</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Strong problem-solving skills
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Analytical mindset
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Attention to detail
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Persistence and resilience
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Interest in technology and security challenges
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Ability to work in structured environments
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="assessment-card">
            <CardHeader>
              <CardTitle className="text-2xl">Assessment Overview</CardTitle>
              <CardDescription>What this comprehensive evaluation covers</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary-glow rounded-full mr-3"></div>
                  Psychometric compatibility testing
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary-glow rounded-full mr-3"></div>
                  Technical aptitude evaluation
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary-glow rounded-full mr-3"></div>
                  Skills assessment and gap analysis
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary-glow rounded-full mr-3"></div>
                  Career motivation and alignment
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary-glow rounded-full mr-3"></div>
                  WISCAR framework analysis
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary-glow rounded-full mr-3"></div>
                  Personalized recommendations
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;