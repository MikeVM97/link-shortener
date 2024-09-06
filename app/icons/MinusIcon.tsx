type MinusIconProps = {
  // onClick: () => void;
  width: number;
  height: number;
  fill?: string;
  stroke?: string;
};

export default function MinusIcon({
  width,
  height,
  fill,
  stroke,
}: MinusIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
      width={width}
      height={height}
      className={`${fill} ${stroke}`}
    >
      <path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z" />
    </svg>
  );
}
