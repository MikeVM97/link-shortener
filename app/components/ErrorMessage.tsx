import TriangleIcon from "../icons/TriangleIcon";
import { useForm } from "../hooks/useForm";

export default function ErrorMessage() {
  const { form } = useForm();

  return (
    <div
      className={`flex items-center justify-center gap-x-3 ${
        !form.error ? "hidden" : "block"
      }`}
    >
      <TriangleIcon />
      <p className="text-center font-semibold text-red-500">{form.error}</p>
    </div>
  );
}
