export default function ToolTip({
  text,
  position,
}: {
  text: string;
  position: string;
}) {
  return (
    <div
      className={`absolute -top-3 ${position} -translate-x-1/2 -translate-y-full w-max text-center rounded-md p-1 text-white bg-gray-500 after:absolute after:top-full after:-ml-[5px] after:border-[5px] after:border-solid after:border-transparent after:border-t-gray-500 dark:text-black dark:bg-gray-200 dark:after:border-t-gray-200 hidden md:block`}
    >
      {text}
    </div>
  );
}
