export default function Alert({ text }: { text: string }) {
  return (
    <p className="text-lg font-semibold p-2 rounded-md fixed top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-green-300 text-center">
      {text}
    </p>
  );
}
