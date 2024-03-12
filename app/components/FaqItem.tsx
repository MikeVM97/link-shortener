"use client";
import { useState, useRef } from "react";
import ExpandIcon from "../icons/ExpandIcon";

type FaqItemProps = {
  marker: string;
  question: string;
  answer: string;
};

export default function FaqItem({ marker, question, answer }: FaqItemProps) {
  const [isOpen, setIsOpen] = useState(false);
  const detailsRef = useRef<HTMLDetailsElement | null>(null);

  const handleToggle = () => {
    if (detailsRef.current && detailsRef.current.open) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  };

  return (
    <li className="faq-item">
      <details ref={detailsRef} onToggle={handleToggle}>
        <summary className="list-none flex items-center justify-between px-2 py-3">
          <h3 className="font-semibold">
            {marker} {question}
          </h3>
          <ExpandIcon isOpen={isOpen} />
        </summary>
        <p className="mt-1 px-2 pb-2">{answer}</p>
      </details>
    </li>
  );
}
