"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabaseBrowser } from "@/lib/supabase/client";
import { calculateScore, categorize } from "@/lib/assessment";
import QuestionCard from "./QuestionCard";
import ProgressBar from "./ProgressBar";

type Stage = "intro" | "questions" | "submitting" | "guest-done" | "error";

interface Question {
  id: number;
  question: string;
}

const questions: Question[] = [
  { id: 1, question: "I enjoy solving difficult problems." },
  { id: 2, question: "I like helping other people." },
  { id: 3, question: "I learn new things quickly." },
  { id: 4, question: "I prefer working in a team." },
  { id: 5, question: "I think I have strong leadership potential." },
  { id: 6, question: "I am creative in finding solutions." },
  { id: 7, question: "I stay focused on tasks even when tasks are difficult." },
  { id: 8, question: "I communicate complex ideas clearly." },
  { id: 9, question: "I enjoy learning new technologies." },
  { id: 10, question: "I can handle stressful situations calmly." },
];

export default function AssessmentPage() {
  const router = useRouter();
  const [stage, setStage] = useState<Stage>("intro");
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [error, setError] = useState<string | null>(null);

  function start() {
    setStage("questions");
    setCurrent(0);
    setAnswers([]);
    setError(null);
  }

  async function answer(score: number) {
    const updated = [...answers];
    updated[current] = score;
    setAnswers(updated);

    if (current < questions.length - 1) {
      setCurrent((c) => c + 1);
      return;
    }

    setStage("submitting");
    const result = calculateScore(updated);
    const category = categorize(result.average);

    try {
      const { data: userData, error: userErr } =
        await supabaseBrowser.auth.getUser();

      if (userErr) throw userErr;

      if (!userData.user) {
        // زائر غير مسجّل: نعرض النتيجة ولكن لا نحفظ
        alert(
          `النتيجة: مجموع ${result.total}، متوسط ${result.average.toFixed(
            2
          )}، الفئة: ${category}. سجّل الدخول لحفظ النتيجة.`
        );
        setStage("guest-done");
        return;
      }

      const { error: insertErr } = await supabaseBrowser
        .from("assessments")
        .insert({
          user_id: userData.user.id,
          answers: Object.fromEntries(
            questions.map((q, i) => [String(q.id), updated[i] ?? 0])
          ),
          score: Math.round(result.average * 100) / 100,
        });

      if (insertErr) throw insertErr;

      router.push("/assessment/results");
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Failed to save.";
      setError(msg);
      setStage("error");
    }
  }

  if (stage === "intro") {
    return (
      <div className="max-w-3xl mx-auto py-20 px-6">
        <h1 className="text-4xl font-bold mb-6">Skill Assessment</h1>
        <p className="text-gray-600 mb-8">
          أجب على {questions.length} أسئلة لكشف مهاراتك الخفية.
        </p>
        <button
          onClick={start}
          className="bg-black text-white px-6 py-3 rounded-xl"
        >
          ابدأ الآن
        </button>
      </div>
    );
  }

  if (stage === "guest-done") {
    return (
      <div className="max-w-3xl mx-auto py-20 px-6">
        <h1 className="text-4xl font-bold">تم ☑</h1>
        <p className="mt-4 text-gray-600">
          سجّل الدخول لحفظ النتيجة وعرض تقرير كامل.
        </p>
        <button
          onClick={() => router.push("/login")}
          className="mt-6 bg-black text-white px-6 py-3 rounded-xl"
        >
          تسجيل الدخول
        </button>
      </div>
    );
  }

  if (stage === "error") {
    return (
      <div className="max-w-3xl mx-auto py-20 px-6">
        <h1 className="text-4xl font-bold">حدث خطأ</h1>
        <p className="text-red-600 mt-2">{error}</p>
        <button
          onClick={start}
          className="mt-6 border px-6 py-3 rounded-xl"
        >
          إعادة المحاولة
        </button>
      </div>
    );
  }

  const safeQuestion = questions[current]?.question ?? "";

  return (
    <div className="max-w-3xl mx-auto py-20 px-6">
      <h1 className="text-4xl font-bold mb-8">Assessment</h1>

      <ProgressBar current={current + 1} total={questions.length} />

      {stage === "submitting" ? (
        <p className="mt-8">... جاري حفظ النتائج</p>
      ) : (
        <QuestionCard question={safeQuestion} onAnswer={answer} />
      )}
    </div>
  );
}
