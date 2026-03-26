interface Props {
  questions: string[];
  onSelect: (question: string) => void;
}

export default function QuickQuestions({ questions, onSelect }: Props) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
      {questions.map((q) => (
        <button
          key={q}
          onClick={() => onSelect(q)}
          className="flex-shrink-0 text-xs bg-sky-50 text-sky-600 px-3 py-1.5 rounded-full border border-sky-200 hover:bg-sky-100 transition-colors"
        >
          {q}
        </button>
      ))}
    </div>
  );
}
