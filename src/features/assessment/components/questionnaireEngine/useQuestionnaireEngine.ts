import { useState, useMemo } from "react";
import {
  AssessmentResult,
  calculateAssessmentResult,
} from "../../utils/calculateResult";
import { Questionnaire } from "../../data/questionnaires";
type QuestionnaireEngineProps = {
  slug: string;
  questionnaire: Questionnaire;
};
export const useQuestionnaireEngine = ({
  slug,
  questionnaire,
}: QuestionnaireEngineProps) => {
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const [result, setResult] = useState<AssessmentResult | null>(null);

  const questions = useMemo(
    () => questionnaire.questions,
    [questionnaire.questions],
  );

  const totalQuestions = questions.length;
  const currentQuestion = questions[currentIndex];

  const currentAnswer = answers[currentQuestion.id];
  const hasCurrentAnswer = currentAnswer !== undefined;

  const answeredQuestions = Object.keys(answers).length;
  const isFirstQuestion = currentIndex === 0;
  const isLastQuestion = currentIndex === totalQuestions - 1;

  const progress = Math.round(((currentIndex + 1) / totalQuestions) * 100);

  const handleAnswer = (questionId: string, value: number) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: value,
    }));

    if (result) setResult(null);
  };

  const goNext = () => {
    if (isLastQuestion) {
      const nextResult = calculateAssessmentResult(slug, answers);
      setResult(nextResult);
      return;
    }

    setCurrentIndex((prev) => prev + 1);
  };

  const goPrevious = () => {
    if (isFirstQuestion) return;
    setCurrentIndex((prev) => prev - 1);
    setResult(null);
  };

  const restartAssessment = () => {
    setAnswers({});
    setCurrentIndex(0);
    setResult(null);
  };

  return {
    progress,
    currentIndex,
    answeredQuestions,
    totalQuestions,
    result,
    currentQuestion,
    currentAnswer,
    handleAnswer,
    isFirstQuestion,
    isLastQuestion,
    hasCurrentAnswer,
    goPrevious,
    goNext,
    restartAssessment,
  };
};
