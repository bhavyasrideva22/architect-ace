import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Brain, Target, Cog, Lightbulb, TrendingUp, Users } from "lucide-react";

const AssessmentFramework = () => {
  const wiscarDimensions = [
    {
      letter: "W",
      name: "Will",
      description: "Inner drive, consistency",
      method: "Motivation survey + behavior log",
      score: 85,
      insight: "High motivation and consistent interest shown",
      icon: Target
    },
    {
      letter: "I",
      name: "Interest",
      description: "Genuine curiosity, career relevance",
      method: "Interest scale + psych test",
      score: 70,
      insight: "Interest aligns well with career demands",
      icon: Lightbulb
    },
    {
      letter: "S",
      name: "Skill",
      description: "Current relevant skills (technical & soft)",
      method: "Technical quiz + self-assessment",
      score: 60,
      insight: "Skill level meets entry requirements, with gaps",
      icon: Cog
    },
    {
      letter: "C",
      name: "Cognitive Readiness",
      description: "Analytical thinking, problem-solving ability",
      method: "Aptitude tests + scenario tasks",
      score: 75,
      insight: "Good problem-solving but needs more real-world tasks",
      icon: Brain
    },
    {
      letter: "A",
      name: "Ability to Learn",
      description: "Openness to feedback, persistence, metacognition",
      method: "Growth mindset test + feedback responses",
      score: 80,
      insight: "Demonstrates strong learning orientation",
      icon: TrendingUp
    },
    {
      letter: "R",
      name: "Real-World Alignment",
      description: "Alignment with actual job roles & work scenarios",
      method: "Job role mapping + scenario eval",
      score: 65,
      insight: "Moderate alignment; practical exposure suggested",
      icon: Users
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-primary/30 text-primary">
            <Brain className="w-4 h-4 mr-2" />
            WISCAR Framework
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Comprehensive <span className="glow-text">Assessment Dimensions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our assessment uses the proven WISCAR framework to evaluate six critical dimensions that predict success in Security Architecture roles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {wiscarDimensions.map((dimension, index) => {
            const IconComponent = dimension.icon;
            return (
              <Card key={dimension.letter} className="assessment-card group hover:scale-105">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
                      <span className="text-2xl font-bold text-primary">{dimension.letter}</span>
                    </div>
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{dimension.name}</CardTitle>
                  <CardDescription>{dimension.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-muted-foreground">Assessment Method</span>
                      </div>
                      <p className="text-sm">{dimension.method}</p>
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-muted-foreground">Example Score</span>
                        <span className="text-primary font-semibold">{dimension.score}/100</span>
                      </div>
                      <Progress value={dimension.score} className="h-2 mb-2" />
                      <p className="text-sm text-muted-foreground">"{dimension.insight}"</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <Card className="assessment-card">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Assessment Output</CardTitle>
            <CardDescription className="text-center">
              What you'll receive after completing the assessment
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">WISCAR Radar Chart</h3>
                <p className="text-sm text-muted-foreground">Visual representation of your strengths and development areas across all dimensions</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">73</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Overall Confidence Score</h3>
                <p className="text-sm text-muted-foreground">Combined score across all dimensions with detailed explanation</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Personalized Insights</h3>
                <p className="text-sm text-muted-foreground">Plain-language insights and actionable recommendations for your career path</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AssessmentFramework;