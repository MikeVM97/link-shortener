export default function MoonIcon({ isSelected }: { isSelected: boolean }) {
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
      <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
    </svg>
  );
}
