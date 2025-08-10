import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Code, CheckCircle, Users, BookOpen, Award } from "lucide-react";

const AssessmentSections = () => {
  const sections = [
    {
      title: "Psychometric Section",
      description: "Evaluate personality compatibility and working preferences",
      icon: Brain,
      duration: "8-10 minutes",
      color: "bg-blue-500/20 text-blue-400",
      components: [
        {
          name: "Interest Scale",
          description: "Motivation to explore Security Architecture"
        },
        {
          name: "Personality Compatibility",
          description: "Big Five traits and Holland Codes assessment"
        },
        {
          name: "Cognitive Style",
          description: "Analytical vs creative thinking preferences"
        },
        {
          name: "Motivation Analysis",
          description: "Internal drive vs external motivators"
        }
      ]
    },
    {
      title: "Technical & Aptitude Section",
      description: "Assess technical readiness and problem-solving skills",
      icon: Code,
      duration: "10-12 minutes",
      color: "bg-green-500/20 text-green-400",
      components: [
        {
          name: "General Aptitude Tests",
          description: "Logical reasoning and numerical ability"
        },
        {
          name: "Prerequisite Knowledge",
          description: "Basic math, logic, and IT fundamentals"
        },
        {
          name: "Domain-Specific Quiz",
          description: "Cybersecurity principles and frameworks"
        },
        {
          name: "Scenario-Based Problems",
          description: "Real-world security challenges"
        }
      ]
    },
    {
      title: "Career Guidance & Recommendations",
      description: "Personalized career insights and learning paths",
      icon: Award,
      duration: "5-8 minutes",
      color: "bg-purple-500/20 text-purple-400",
      components: [
        {
          name: "Role Suitability",
          description: "Yes/No/Maybe recommendation with reasoning"
        },
        {
          name: "Alternative Paths",
          description: "Related career options if not a perfect fit"
        },
        {
          name: "Learning Roadmap",
          description: "Personalized skill development plan"
        },
        {
          name: "Certification Guide",
          description: "Recommended certifications and training"
        }
      ]
    }
  ];

  return (
    <section className="section-background py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-primary/30 text-primary">
            <CheckCircle className="w-4 h-4 mr-2" />
            Assessment Sections
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Three-Part <span className="glow-text">Assessment Journey</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our comprehensive assessment is divided into three focused sections, each designed to evaluate different aspects of your Security Architect readiness.
          </p>
        </div>

        <div className="space-y-8">
          {sections.map((section, index) => {
            const IconComponent = section.icon;
            return (
              <Card key={section.title} className="assessment-card">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-4">
                      <div className={`w-16 h-16 rounded-full flex items-center justify-center ${section.color}`}>
                        <IconComponent className="w-8 h-8" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl">{section.title}</CardTitle>
                        <CardDescription className="text-base mt-2">{section.description}</CardDescription>
                      </div>
                    </div>
                    <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                      {section.duration}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {section.components.map((component, componentIndex) => (
                      <div key={component.name} className="border border-border/50 rounded-lg p-4 hover:border-primary/30 transition-colors">
                        <h4 className="font-semibold text-lg mb-2">{component.name}</h4>
                        <p className="text-muted-foreground text-sm">{component.description}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-16">
          <Card className="assessment-card">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Sample Assessment Outputs</CardTitle>
              <CardDescription className="text-center">
                Examples of the detailed feedback you'll receive
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-primary">Psychological Fit Score: 85/100</h4>
                  <p className="text-muted-foreground">
                    "Your profile shows a strong alignment with the analytical and conscientious traits typical of successful Security Architects. Your high openness to experience and systematic thinking style are particularly well-suited for this role."
                  </p>
                </div>
                
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-primary">Technical Readiness Score: 72/100</h4>
                  <p className="text-muted-foreground">
                    "Your understanding of risk management principles is solid; however, foundational networking concepts and cloud security frameworks need improvement. We recommend starting with CompTIA Network+ before advancing to security specializations."
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AssessmentSections;