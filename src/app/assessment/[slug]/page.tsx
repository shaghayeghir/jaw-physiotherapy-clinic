import { notFound } from "next/navigation"
import QuestionnaireEngine from "@/features/assessment/components/QuestionnaireEngine"
import { questionnaires } from "@/features/assessment/data/questionnaires"

type AssessmentPageProps = {
  params: Promise<{
    slug: string
  }>
}

export default async function AssessmentPage({ params }: AssessmentPageProps) {
  const { slug } = await params

  const questionnaire = questionnaires[slug]

  if (!questionnaire) {
    notFound()
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#f8f5f0]">
      <QuestionnaireEngine slug={slug} questionnaire={questionnaire} />
    </main>
  )
}
