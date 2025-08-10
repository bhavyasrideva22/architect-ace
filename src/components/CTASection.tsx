import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Clock, Users, Award, ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="section-background py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Discover Your <span className="glow-text">Security Architect</span> Potential?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Take the comprehensive assessment and get personalized insights into your career readiness, technical aptitude, and learning path.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <Button size="lg" className="hero-button text-lg px-8 py-6">
              Start Your Assessment
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-primary/30 hover:bg-primary/10">
              View Sample Report
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <Card className="assessment-card text-center">
            <CardContent className="pt-6">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">20-30 Minutes</h3>
              <p className="text-sm text-muted-foreground">Complete assessment duration</p>
            </CardContent>
          </Card>

          <Card className="assessment-card text-center">
            <CardContent className="pt-6">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Validated Framework</h3>
              <p className="text-sm text-muted-foreground">Based on proven methodologies</p>
            </CardContent>
          </Card>

          <Card className="assessment-card text-center">
            <CardContent className="pt-6">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Expert Designed</h3>
              <p className="text-sm text-muted-foreground">Created by security professionals</p>
            </CardContent>
          </Card>

          <Card className="assessment-card text-center">
            <CardContent className="pt-6">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Actionable Results</h3>
              <p className="text-sm text-muted-foreground">Detailed career recommendations</p>
            </CardContent>
          </Card>
        </div>

        <Card className="assessment-card">
          <CardContent className="p-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">What Happens After Assessment?</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-lg font-bold text-primary">1</span>
                  </div>
                  <h4 className="font-semibold mb-2">Instant Results</h4>
                  <p className="text-sm text-muted-foreground">Receive your comprehensive assessment report immediately upon completion</p>
                </div>
                
                <div>
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-lg font-bold text-primary">2</span>
                  </div>
                  <h4 className="font-semibold mb-2">Personalized Roadmap</h4>
                  <p className="text-sm text-muted-foreground">Get a customized learning path with specific courses and certifications</p>
                </div>
                
                <div>
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-lg font-bold text-primary">3</span>
                  </div>
                  <h4 className="font-semibold mb-2">Ongoing Support</h4>
                  <p className="text-sm text-muted-foreground">Access to career guidance and updated recommendations as you progress</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CTASection;