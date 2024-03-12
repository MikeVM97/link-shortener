export default function DesktopIcon({ isSelected }: { isSelected: boolean }) {
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
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
      <path d="M8 21h8"></path>
      <path d="M12 17v4"></path>
    </svg>
  );
}
