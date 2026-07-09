"use client";

import { useMemo, useState } from "react";
import type {
  Question,
  Questionnaire,
} from "@/features/assessment/data/questionnaires";
import {
  calculateAssessmentResult,
  type AssessmentResult,
} from "@/features/assessment/utils/calculateResult";
import { useQuestionnaireEngine } from "./useQuestionnaireEngine";
import { BackgroundDecor } from "./component/BackgroundDecor";
import { ResultCard } from "./component/ResultCard";
import { NavigationButtons } from "./component/NavigationButtons";
import { HeaderCard } from "./component/HeaderCard";
import { QuestionCard } from "./component/QuestionCard";

type QuestionnaireEngineProps = {
  slug: string;
  questionnaire: Questionnaire;
};

export default function QuestionnaireEngine({
  slug,
  questionnaire,
}: QuestionnaireEngineProps) {
  const {
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
  } = useQuestionnaireEngine({ slug, questionnaire });
  return (
    <section
      dir="rtl"
      className="relative min-h-screen px-4 py-4 text-[#2d2722] sm:px-6"
    >
      <BackgroundDecor />

      <div className="relative z-10 mx-auto flex  max-w-4xl flex-col">
        <HeaderCard
          title={questionnaire.title}
          subtitle={questionnaire.subtitle}
          description={questionnaire.description}
          progress={progress}
          currentIndex={currentIndex}
          answeredQuestions={answeredQuestions}
          totalQuestions={totalQuestions}
        />

        {!result && (
          <>
            <div className="mt-4 flex flex-1 items-center">
              <QuestionCard
                key={currentQuestion.id}
                index={currentIndex}
                totalQuestions={totalQuestions}
                question={currentQuestion}
                value={currentAnswer}
                onChange={(value: any) =>
                  handleAnswer(currentQuestion.id, value)
                }
              />
            </div>

            <NavigationButtons
              isFirstQuestion={isFirstQuestion}
              isLastQuestion={isLastQuestion}
              hasCurrentAnswer={hasCurrentAnswer}
              onPrevious={goPrevious}
              onNext={goNext}
            />
          </>
        )}

        {result && <ResultCard result={result} onRestart={restartAssessment} />}
      </div>
    </section>
  );
}
