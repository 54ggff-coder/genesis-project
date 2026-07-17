"use client";

import { useState } from "react";
import QuestionCard from "@/app/assessment/Questioncard";
import ProgressBar from "./ProgressBar";

const questions = [
  {
    id: 1,
    question: "I enjoy solving difficult problems.",
  },
  {
    id: 2,
    question: "I like helping other people.",
  },
  {
    id: 3,
    question: "I learn new things quickly.",
  },
];

export default function AssessmentPage() {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);

  function answer(score: number) {
    const updated = [...answers];
    updated[current] = score;
    setAnswers(updated);

    if (current < questions.length - 1) {
      setCurrent(current + 1);
    } else {
      alert("Assessment Complete");
    }
  }

  return (
    <div className="max-w-3xl mx-auto py-20 px-6">
      <h1 className="text-4xl font-bold mb-8">Assessment</h1>

      <ProgressBar current={current + 1} total={questions.length} />

      <QuestionCard
        question={questions[current].question}
        onAnswer={answer}
      />
    </div>
  );
}