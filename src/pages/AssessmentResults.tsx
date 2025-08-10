import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { CheckCircle, Brain, Target, Cog, Lightbulb, TrendingUp, Users, ArrowRight, Download, Home } from "lucide-react";

const AssessmentResults = () => {
  // Mock results data - in real app this would come from assessment state
  const overallScore = 73;
  const recommendation = "YES";
  
  const wiscarScores = [
    { dimension: "Will", letter: "W", score: 85, insight: "High motivation and consistent interest shown", icon: Target },
    { dimension: "Interest", letter: "I", score: 70, insight: "Interest aligns well with career demands", icon: Lightbulb },
    { dimension: "Skill", letter: "S", score: 60, insight: "Skill level meets entry requirements, with gaps", icon: Cog },
    { dimension: "Cognitive", letter: "C", score: 75, insight: "Good problem-solving but needs more real-world tasks", icon: Brain },
    { dimension: "Ability to Learn", letter: "A", score: 80, insight: "Demonstrates strong learning orientation", icon: TrendingUp },
    { dimension: "Real-World", letter: "R", score: 65, insight: "Moderate alignment; practical exposure suggested", icon: Users }
  ];

  const sectionScores = [
    { section: "Psychometric Fit", score: 82, description: "Strong alignment with analytical and conscientious traits" },
    { section: "Technical Readiness", score: 68, description: "Good foundation with some areas needing development" },
    { section: "Career Alignment", score: 75, description: "Well-suited for security architecture responsibilities" }
  ];

  const roleMatches = [
    { role: "Security Architect", match: 85, status: "Highly Recommended" },
    { role: "Cybersecurity Analyst", match: 72, status: "Good Match" },
    { role: "Network Security Engineer", match: 68, status: "Moderate Match" },
    { role: "Cloud Security Specialist", match: 64, status: "Moderate Match" }
  ];

  const learningPath = [
    "Start with CompTIA Network+ to strengthen networking fundamentals",
    "Complete Security+ certification for core security concepts", 
    "Gain hands-on experience with security tools and frameworks",
    "Pursue CISSP or SABSA for advanced security architecture knowledge"
  ];

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 border-primary/30 text-primary">
            <CheckCircle className="w-4 h-4 mr-2" />
            Assessment Complete
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Your <span className="glow-text">Assessment Results</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Based on your responses, here's your comprehensive Security Architect readiness analysis and personalized career recommendations.
          </p>
        </div>

        {/* Overall Recommendation */}
        <Card className="assessment-card mb-8">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-3xl flex items-center">
                  <CheckCircle className="w-8 h-8 text-green-400 mr-3" />
                  Recommendation: {recommendation}
                </CardTitle>
                <CardDescription className="text-lg mt-2">
                  You show strong potential for a Security Architect career
                </CardDescription>
              </div>
              <div className="text-right">
                <div className="text-4xl font-bold text-primary mb-2">{overallScore}/100</div>
                <div className="text-sm text-muted-foreground">Overall Confidence</div>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-6">
              <p className="text-base">
                "Your strong motivation and analytical skills make this a promising path. Your systematic thinking and attention to detail align well with the demands of security architecture. Focus on building foundational networking skills to maximize your potential."
              </p>
            </div>
            <Progress value={overallScore} className="mt-4 h-3" />
          </CardContent>
        </Card>

        {/* WISCAR Analysis */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">
            <span className="glow-text">WISCAR</span> Framework Analysis
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {wiscarScores.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <Card key={item.dimension} className="assessment-card">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                        <span className="text-xl font-bold text-primary">{item.letter}</span>
                      </div>
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{item.dimension}</CardTitle>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-primary">{item.score}/100</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Progress value={item.score} className="mb-3 h-2" />
                    <p className="text-sm text-muted-foreground">"{item.insight}"</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Section Scores */}
        <Card className="assessment-card mb-12">
          <CardHeader>
            <CardTitle className="text-2xl">Section Performance</CardTitle>
            <CardDescription>Your performance across the three assessment areas</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {sectionScores.map((section, index) => (
                <div key={section.section}>
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-lg font-semibold">{section.section}</h4>
                    <span className="text-xl font-bold text-primary">{section.score}/100</span>
                  </div>
                  <Progress value={section.score} className="mb-2 h-3" />
                  <p className="text-sm text-muted-foreground">{section.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Career Matches */}
        <Card className="assessment-card mb-12">
          <CardHeader>
            <CardTitle className="text-2xl">Career Role Matches</CardTitle>
            <CardDescription>How well you align with different cybersecurity roles</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {roleMatches.map((role, index) => (
                <div key={role.role} className="flex items-center justify-between p-4 border border-border/50 rounded-lg">
                  <div>
                    <h4 className="font-semibold text-lg">{role.role}</h4>
                    <p className="text-sm text-muted-foreground">{role.status}</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-24">
                      <Progress value={role.match} className="h-2" />
                    </div>
                    <span className="text-lg font-bold text-primary w-12">{role.match}%</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Learning Path */}
        <Card className="assessment-card mb-12">
          <CardHeader>
            <CardTitle className="text-2xl">Your Personalized Learning Path</CardTitle>
            <CardDescription>Recommended steps to become a Security Architect</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {learningPath.map((step, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-sm font-bold text-primary">{index + 1}</span>
                  </div>
                  <p className="text-base">{step}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Button size="lg" className="hero-button">
            <Download className="w-5 h-5 mr-2" />
            Download Full Report
          </Button>
          <Button variant="outline" size="lg" onClick={() => window.location.href = '/'}>
            <Home className="w-5 h-5 mr-2" />
            Back to Home
          </Button>
          <Button variant="outline" size="lg">
            Retake Assessment
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>

        {/* Next Steps CTA */}
        <Card className="assessment-card">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Journey?</h3>
            <p className="text-muted-foreground mb-6">
              Based on your results, we recommend starting with our beginner-friendly Security Fundamentals course.
            </p>
            <Button size="lg" className="hero-button">
              Explore Learning Resources
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </CardContent>
        </Card>

      </div>
    </div>
  );
};

export default AssessmentResults;