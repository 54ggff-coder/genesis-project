export interface AssessmentAnswer {
  questionId: string;
  value: number;
}

export interface AssessmentResult {
  total: number;
  average: number;
  max: number;
  min: number;
  count: number;
}

export function calculateScore(answers: number[]): AssessmentResult {
  if (answers.length === 0) {
    return { total: 0, average: 0, max: 0, min: 0, count: 0 };
  }
  const total = answers.reduce((a, b) => a + b, 0);
  return {
    total,
    average: total / answers.length,
    max: Math.max(...answers),
    min: Math.min(...answers),
    count: answers.length,
  };
}

export function categorize(average: number): "low" | "medium" | "high" {
  if (average < 2) return "low";
  if (average < 4) return "medium";
  return "high";
}
