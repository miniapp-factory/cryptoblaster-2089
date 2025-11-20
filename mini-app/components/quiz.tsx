"use client";

import { useState } from "react";
import QuizQuestion from "./quiz-question";
import QuizResult from "./quiz-result";

type Question = {
  text: string;
  options: string[];
};

const questions: Question[] = [
  {
    text: "What motivates you most in Web3?",
    options: ["Building new protocols", "Hacking existing ones", "Creating art"],
  },
  {
    text: "How do you prefer to learn?",
    options: ["Reading docs", "Experimenting", "Collaborating"],
  },
  {
    text: "What’s your ideal project?",
    options: ["Decentralized finance", "NFT marketplace", "Gaming"],
  },
  {
    text: "How do you handle risk?",
    options: ["Take calculated risks", "Avoid risk", "Take bold risks"],
  },
  {
    text: "What’s your biggest strength?",
    options: ["Vision", "Technical skill", "Community building"],
  },
];

const personalityMap: Record<string, { title: string; description: string }> = {
  Visionary: {
    title: "Visionary",
    description: "You see the future of Web3 and build it.",
  },
  Hacker: {
    title: "Hacker",
    description: "You break things to understand them.",
  },
  Rebel: {
    title: "Rebel",
    description: "You challenge the status quo.",
  },
  Creator: {
    title: "Creator",
    description: "You create art and experiences.",
  },
  Guardian: {
    title: "Guardian",
    description: "You protect the ecosystem.",
  },
  Explorer: {
    title: "Explorer",
    description: "You discover new possibilities.",
  },
};

export default function Quiz() {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);

  const handleSelect = (option: string) => {
    setAnswers([...answers, option]);
    if (current + 1 < questions.length) {
      setCurrent(current + 1);
    }
  };

  if (current < questions.length) {
    return (
      <QuizQuestion
        question={questions[current]}
        onSelect={handleSelect}
      />
    );
  }

  const score: Record<string, number> = {
    Visionary: 0,
    Hacker: 0,
    Rebel: 0,
    Creator: 0,
    Guardian: 0,
    Explorer: 0,
  };

  answers.forEach((ans) => {
    if (ans.includes("Building") || ans.includes("Vision")) {
      score.Visionary += 1;
    } else if (ans.includes("Hacking") || ans.includes("Technical")) {
      score.Hacker += 1;
    } else if (ans.includes("Challenge") || ans.includes("Bold")) {
      score.Rebel += 1;
    } else if (ans.includes("Create") || ans.includes("Art")) {
      score.Creator += 1;
    } else if (ans.includes("Protect") || ans.includes("Guard")) {
      score.Guardian += 1;
    } else {
      score.Explorer += 1;
    }
  });

  const personality = Object.entries(score).reduce(
    (max, [key, val]) => (val > max[1] ? [key, val] : max),
    ["", 0]
  )[0];

  const result = personalityMap[personality];

  return <QuizResult title={result.title} description={result.description} />;
}
