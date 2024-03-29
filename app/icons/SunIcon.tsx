export default function SunIcon({ isSelected }: { isSelected: boolean }) {
  return (
    <svg
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={`${isSelected ? "2.5" : "1.5"}`}
      stroke="black"
      viewBox="0 0 24 24"
      width="15"
      height="15"
      className="group-hover:stroke-[2.5px] dark:stroke-white"
    >
      <circle cx="12" cy="12" r="5"></circle>
      <path d="M12 1v2"></path>
      <path d="M12 21v2"></path>
      <path d="M4.22 4.22l1.42 1.42"></path>
      <path d="M18.36 18.36l1.42 1.42"></path>
      <path d="M1 12h2"></path>
      <path d="M21 12h2"></path>
      <path d="M4.22 19.78l1.42-1.42"></path>
      <path d="M18.36 5.64l1.42-1.42"></path>
    </svg>
  );
}
