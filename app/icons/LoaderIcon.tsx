"use client";

import { useForm } from "../hooks/useForm";

export default function LoaderIcon() {
  const { form } = useForm();

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 56.29 60"
      width={20}
      height={20}
      fill="none"
      stroke="black"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={10}
      className={`m-auto ${form.isLoading ? "block" : "hidden"}`}
    >
      <path d="m51.29,43.11c-4.4,7.14-12.29,11.89-21.29,11.89-13.81,0-25-11.19-25-25S16.19,5,30,5c5.69,0,10.93,1.9,15.13,5.1">
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 30 30"
          to="360 30 30"
          dur="1s"
          repeatCount="indefinite"
        />
      </path>
    </svg>
  );
}
