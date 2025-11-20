"use client";

import { FC } from "react";

type Props = {
  title: string;
  description: string;
};

const QuizResult: FC<Props> = ({ title, description }) => (
  <div className="flex flex-col items-center gap-4">
    <h2 className="text-2xl font-bold">{title}</h2>
    <p className="text-center">{description}</p>
  </div>
);

export default QuizResult;
