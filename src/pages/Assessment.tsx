import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useState, createElement } from "react";
import { Brain, Code, Target, ArrowLeft, ArrowRight } from "lucide-react";

interface Question {
  id: string;
  question: string;
  options: string[];
  type: 'single' | 'likert';
  category: string;
}

interface AssessmentState {
  currentSection: number;
  currentQuestion: number;
  answers: Record<string, string>;
  timeStarted: Date;
}

const Assessment = () => {
  const [assessmentState, setAssessmentState] = useState<AssessmentState>({
    currentSection: 0,
    currentQuestion: 0,
    answers: {},
    timeStarted: new Date()
  });

  const sections = [
    {
      title: "Psychometric Assessment",
      description: "Evaluate personality compatibility and working preferences",
      icon: Brain,
      duration: "8-10 minutes",
      color: "bg-blue-500/20 text-blue-400"
    },
    {
      title: "Technical & Aptitude",
      description: "Assess technical readiness and problem-solving skills", 
      icon: Code,
      duration: "10-12 minutes",
      color: "bg-green-500/20 text-green-400"
    },
    {
      title: "Career Alignment",
      description: "Determine fit with Security Architect role requirements",
      icon: Target,
      duration: "5-8 minutes", 
      color: "bg-purple-500/20 text-purple-400"
    }
  ];

  const psychometricQuestions: Question[] = [
    {
      id: "interest_1",
      question: "How interested are you in solving complex security problems?",
      options: ["Not at all interested", "Slightly interested", "Moderately interested", "Very interested", "Extremely interested"],
      type: "likert",
      category: "interest"
    },
    {
      id: "personality_1", 
      question: "I prefer working on detailed, systematic tasks rather than creative, open-ended projects.",
      options: ["Strongly disagree", "Disagree", "Neutral", "Agree", "Strongly agree"],
      type: "likert",
      category: "personality"
    },
    {
      id: "motivation_1",
      question: "What primarily motivates you to consider a career in cybersecurity?",
      options: ["High salary potential", "Job security", "Intellectual challenge", "Helping protect organizations", "Technology fascination"],
      type: "single",
      category: "motivation"
    },
    {
      id: "workstyle_1",
      question: "I work better when following established procedures and guidelines.",
      options: ["Strongly disagree", "Disagree", "Neutral", "Agree", "Strongly agree"],
      type: "likert", 
      category: "workstyle"
    },
    {
      id: "personality_2",
      question: "I enjoy analyzing problems methodically to find root causes.",
      options: ["Strongly disagree", "Disagree", "Neutral", "Agree", "Strongly agree"],
      type: "likert",
      category: "personality"
    }
  ];

  const technicalQuestions: Question[] = [
    {
      id: "aptitude_1",
      question: "Which number comes next in the sequence: 2, 6, 18, 54, ?",
      options: ["108", "162", "216", "270", "324"],
      type: "single",
      category: "logical_reasoning"
    },
    {
      id: "networking_1",
      question: "What does a firewall primarily do?",
      options: ["Encrypt data", "Filter network traffic", "Store passwords", "Monitor system performance", "Backup files"],
      type: "single",
      category: "networking"
    },
    {
      id: "security_1",
      question: "Which of these is NOT one of the CIA triad principles?",
      options: ["Confidentiality", "Integrity", "Availability", "Authentication", "All are CIA principles"],
      type: "single",
      category: "security_fundamentals"
    },
    {
      id: "risk_1",
      question: "Risk is best defined as:",
      options: ["Any potential threat", "Likelihood × Impact", "Number of vulnerabilities", "Cost of security controls", "Frequency of incidents"],
      type: "single", 
      category: "risk_management"
    },
    {
      id: "programming_1",
      question: "What would this pseudocode output? \nif (5 > 3 AND 2 < 4) then print 'A' else print 'B'",
      options: ["A", "B", "Error", "Nothing", "Both A and B"],
      type: "single",
      category: "logical_thinking"
    }
  ];

  const careerQuestions: Question[] = [
    {
      id: "role_interest_1",
      question: "How appealing is designing security frameworks for large organizations?",
      options: ["Not appealing", "Slightly appealing", "Moderately appealing", "Very appealing", "Extremely appealing"],
      type: "likert",
      category: "role_alignment"
    },
    {
      id: "learning_1",
      question: "How comfortable are you learning new technical concepts continuously?",
      options: ["Very uncomfortable", "Uncomfortable", "Neutral", "Comfortable", "Very comfortable"],
      type: "likert",
      category: "learning_agility"
    },
    {
      id: "responsibility_1",
      question: "How do you feel about being responsible for organizational security decisions?",
      options: ["Very anxious", "Somewhat anxious", "Neutral", "Confident", "Very confident"],
      type: "likert",
      category: "responsibility"
    }
  ];

  const allQuestions = [psychometricQuestions, technicalQuestions, careerQuestions];
  const currentSectionQuestions = allQuestions[assessmentState.currentSection];
  const currentQuestion = currentSectionQuestions[assessmentState.currentQuestion];
  
  const totalQuestions = allQuestions.reduce((sum, section) => sum + section.length, 0);
  const completedQuestions = allQuestions.slice(0, assessmentState.currentSection).reduce((sum, section) => sum + section.length, 0) + assessmentState.currentQuestion;
  const progressPercentage = (completedQuestions / totalQuestions) * 100;

  const handleAnswer = (answer: string) => {
    setAssessmentState(prev => ({
      ...prev,
      answers: {
        ...prev.answers,
        [currentQuestion.id]: answer
      }
    }));
  };

  const nextQuestion = () => {
    const isLastQuestionInSection = assessmentState.currentQuestion === currentSectionQuestions.length - 1;
    const isLastSection = assessmentState.currentSection === sections.length - 1;

    if (isLastQuestionInSection && isLastSection) {
      // Assessment complete - navigate to results
      window.location.href = '/assessment/results';
      return;
    }

    if (isLastQuestionInSection) {
      // Move to next section
      setAssessmentState(prev => ({
        ...prev,
        currentSection: prev.currentSection + 1,
        currentQuestion: 0
      }));
    } else {
      // Move to next question
      setAssessmentState(prev => ({
        ...prev,
        currentQuestion: prev.currentQuestion + 1
      }));
    }
  };

  const previousQuestion = () => {
    const isFirstQuestionInSection = assessmentState.currentQuestion === 0;
    const isFirstSection = assessmentState.currentSection === 0;

    if (isFirstQuestionInSection && isFirstSection) {
      return; // Can't go back further
    }

    if (isFirstQuestionInSection) {
      // Move to previous section, last question
      const prevSectionLength = allQuestions[assessmentState.currentSection - 1].length;
      setAssessmentState(prev => ({
        ...prev,
        currentSection: prev.currentSection - 1,
        currentQuestion: prevSectionLength - 1
      }));
    } else {
      // Move to previous question
      setAssessmentState(prev => ({
        ...prev,
        currentQuestion: prev.currentQuestion - 1
      }));
    }
  };

  const canProceed = assessmentState.answers[currentQuestion.id] !== undefined;
  const canGoBack = !(assessmentState.currentSection === 0 && assessmentState.currentQuestion === 0);

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Security Architect <span className="glow-text">Assessment</span>
          </h1>
          <Progress value={progressPercentage} className="w-full max-w-2xl mx-auto h-3 mb-4" />
          <p className="text-muted-foreground">
            Question {completedQuestions + 1} of {totalQuestions} • Section {assessmentState.currentSection + 1} of {sections.length}
          </p>
        </div>

        {/* Current Section Info */}
        <Card className="assessment-card mb-8">
          <CardHeader>
            <div className="flex items-center space-x-4">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center ${sections[assessmentState.currentSection].color}`}>
                {createElement(sections[assessmentState.currentSection].icon, { className: "w-6 h-6" })}
              </div>
              <div>
                <CardTitle className="text-xl">{sections[assessmentState.currentSection].title}</CardTitle>
                <CardDescription>{sections[assessmentState.currentSection].description}</CardDescription>
              </div>
              <Badge variant="secondary" className="ml-auto">
                {sections[assessmentState.currentSection].duration}
              </Badge>
            </div>
          </CardHeader>
        </Card>

        {/* Question */}
        <Card className="assessment-card mb-8">
          <CardHeader>
            <CardTitle className="text-xl">{currentQuestion.question}</CardTitle>
            {currentQuestion.category === "logical_thinking" && (
              <div className="bg-muted/50 p-4 rounded-lg font-mono text-sm">
                <pre>{currentQuestion.question.split('\n').slice(1).join('\n')}</pre>
              </div>
            )}
          </CardHeader>
          <CardContent>
            <RadioGroup
              value={assessmentState.answers[currentQuestion.id] || ""}
              onValueChange={handleAnswer}
              className="space-y-3"
            >
              {currentQuestion.options.map((option, index) => (
                <div key={index} className="flex items-center space-x-2 p-3 rounded-lg border border-border/50 hover:border-primary/30 transition-colors">
                  <RadioGroupItem value={option} id={`option-${index}`} />
                  <Label htmlFor={`option-${index}`} className="flex-1 cursor-pointer">
                    {option}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between">
          <Button
            variant="outline"
            onClick={previousQuestion}
            disabled={!canGoBack}
            className="flex items-center"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Previous
          </Button>
          
          <Button
            onClick={nextQuestion}
            disabled={!canProceed}
            className="hero-button flex items-center"
          >
            {assessmentState.currentSection === sections.length - 1 && 
             assessmentState.currentQuestion === currentSectionQuestions.length - 1 
             ? "Complete Assessment" : "Next"}
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Assessment;