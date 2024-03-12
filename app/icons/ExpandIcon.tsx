export default function ExpandIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
      width={25}
      height={25}
      style={{
        transition: "transform 0.3s ease", // Agregamos una transición para suavizar la animación
        transform: isOpen ? "rotate(180deg)" : "rotate(0deg)", // Aplicamos la rotación según el estado isOpen
      }}
    >
      <path
        fillRule="evenodd"
        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}
