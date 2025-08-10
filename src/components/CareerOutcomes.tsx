import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { CheckCircle, XCircle, AlertCircle, ArrowRight, BookOpen, Award } from "lucide-react";

const CareerOutcomes = () => {
  const roleMatches = [
    {
      role: "Security Architect",
      description: "Designs secure IT frameworks",
      skills: ["Network Security", "Risk Management", "Security Frameworks"],
      matchLevel: "High",
      score: 85,
      color: "text-green-400"
    },
    {
      role: "Cybersecurity Analyst",
      description: "Monitors & responds to threats",
      skills: ["Incident Response", "SIEM", "Threat Detection"],
      matchLevel: "Medium",
      score: 65,
      color: "text-yellow-400"
    },
    {
      role: "Cloud Security Specialist",
      description: "Secures cloud environments",
      skills: ["Cloud Platforms", "Access Management", "DevSecOps"],
      matchLevel: "Medium",
      score: 60,
      color: "text-yellow-400"
    },
    {
      role: "IT Security Manager",
      description: "Oversees security teams and strategy",
      skills: ["Leadership", "Compliance", "Policy Development"],
      matchLevel: "Low",
      score: 45,
      color: "text-red-400"
    }
  ];

  const learningPath = [
    {
      phase: "Foundation",
      duration: "2-3 months",
      modules: ["Networking Basics", "Operating Systems", "Basic Security Concepts"],
      status: "recommended"
    },
    {
      phase: "Core Security",
      duration: "4-6 months",
      modules: ["Cybersecurity Fundamentals", "Risk Management", "Security Frameworks"],
      status: "required"
    },
    {
      phase: "Specialization",
      duration: "6-8 months",
      modules: ["Security Architecture", "Advanced Threat Analysis", "Compliance"],
      status: "advanced"
    },
    {
      phase: "Certification",
      duration: "3-4 months",
      modules: ["CISSP Preparation", "SABSA Framework", "Professional Projects"],
      status: "professional"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-primary/30 text-primary">
            <Award className="w-4 h-4 mr-2" />
            Career Outcomes
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Your <span className="glow-text">Career Roadmap</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Based on your assessment results, receive personalized career recommendations and a detailed learning path to achieve your goals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <Card className="assessment-card">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center">
                <CheckCircle className="w-6 h-6 text-green-400 mr-2" />
                Recommendation: YES
              </CardTitle>
              <CardDescription>
                You show strong potential for a Security Architect career
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                  <p className="text-sm">
                    "Your strong motivation and analytical skills make this a promising path. Your systematic thinking and attention to detail align well with the demands of security architecture. Focus on building foundational networking skills to maximize your potential."
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold">Overall Confidence Score</h4>
                  <div className="flex items-center space-x-3">
                    <Progress value={73} className="flex-1 h-3" />
                    <span className="text-2xl font-bold text-primary">73/100</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="assessment-card">
            <CardHeader>
              <CardTitle className="text-2xl">Alternative Paths</CardTitle>
              <CardDescription>
                If Security Architect isn't the perfect fit
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 border border-border/50 rounded-lg">
                  <span>Network Security Engineer</span>
                  <Badge variant="secondary">High Match</Badge>
                </div>
                <div className="flex items-center justify-between p-3 border border-border/50 rounded-lg">
                  <span>Systems Security Analyst</span>
                  <Badge variant="secondary">Good Match</Badge>
                </div>
                <div className="flex items-center justify-between p-3 border border-border/50 rounded-lg">
                  <span>IT Risk Specialist</span>
                  <Badge variant="secondary">Moderate Match</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="assessment-card mb-16">
          <CardHeader>
            <CardTitle className="text-2xl">Top Career Matches</CardTitle>
            <CardDescription>
              Roles ranked by your assessment results and skill alignment
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {roleMatches.map((role, index) => (
                <div key={role.role} className="border border-border/50 rounded-lg p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-lg font-semibold">{role.role}</h4>
                      <p className="text-muted-foreground">{role.description}</p>
                    </div>
                    <div className="text-right">
                      <div className={`text-sm font-semibold ${role.color}`}>{role.matchLevel} Match</div>
                      <div className="text-2xl font-bold text-primary">{role.score}%</div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {role.skills.map((skill) => (
                      <Badge key={skill} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  <Progress value={role.score} className="h-2" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="assessment-card">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center">
              <BookOpen className="w-6 h-6 text-primary mr-2" />
              Personalized Learning Path
            </CardTitle>
            <CardDescription>
              Your step-by-step journey to becoming a Security Architect
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {learningPath.map((phase, index) => (
                <div key={phase.phase} className="flex items-start space-x-4">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                      <span className="text-sm font-bold text-primary">{index + 1}</span>
                    </div>
                    {index < learningPath.length - 1 && (
                      <div className="w-px h-16 bg-border mt-2"></div>
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-lg font-semibold">{phase.phase}</h4>
                      <Badge variant="outline" className="text-xs">
                        {phase.duration}
                      </Badge>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {phase.modules.map((module) => (
                        <Badge key={module} variant="secondary" className="text-xs">
                          {module}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-6 bg-primary/10 border border-primary/20 rounded-lg">
              <h4 className="font-semibold text-primary mb-2">Recommended Certifications</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-sm font-semibold">Entry Level</div>
                  <div className="text-xs text-muted-foreground">CompTIA Security+</div>
                </div>
                <div className="text-center">
                  <div className="text-sm font-semibold">Intermediate</div>
                  <div className="text-xs text-muted-foreground">CISSP Associate</div>
                </div>
                <div className="text-center">
                  <div className="text-sm font-semibold">Advanced</div>
                  <div className="text-xs text-muted-foreground">SABSA, TOGAF</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CareerOutcomes;