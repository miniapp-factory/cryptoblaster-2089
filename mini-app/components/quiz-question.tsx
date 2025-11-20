"use client";

import { FC } from "react";

type Props = {
  question: {
    text: string;
    options: string[];
  };
  onSelect: (option: string) => void;
};

const QuizQuestion: FC<Props> = ({ question, onSelect }) => (
  <div className="flex flex-col gap-4">
    <h2 className="text-xl font-semibold">{question.text}</h2>
    <div className="flex flex-col gap-2">
      {question.options.map((opt) => (
        <button
          key={opt}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={() => onSelect(opt)}
        >
          {opt}
        </button>
      ))}
    </div>
  </div>
);

export default QuizQuestion;
