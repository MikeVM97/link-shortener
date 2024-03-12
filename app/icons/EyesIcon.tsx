type EyesIconProps = {
  onClick: () => void;
  isHidden: boolean;
};

export default function EyesIcon({ onClick, isHidden }: EyesIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={isHidden ? "0 0 159.8 126.87" : "0 0 142.99 112.14"}
      width={20}
      height={20}
      fill="black"
      strokeWidth={0}
      onClick={onClick}
      className="cursor-pointer dark:fill-white"
    >
      {!isHidden && (
        <g>
          <path d="m74.02,112.14c-27.92-.84-46.59-13.12-61.32-32.11-4.65-5.99-8.2-12.91-11.73-19.68-1.08-2.07-1.34-5.47-.4-7.56C12.02,27.46,29.62,8.53,57.53,1.81c22.43-5.4,42.06,1.69,59.27,16.17,10.86,9.14,19.15,20.38,24.97,33.32,1,2.22,1.71,5.49.81,7.5-10.62,23.57-26.88,41.6-51.97,50.08-6.21,2.1-12.96,2.59-16.58,3.27Zm-38.79-56.7c-.36,19.7,15.28,36.34,34.52,36.73,20.89.42,37.54-15.2,37.85-35.52.3-19.55-15.51-36.31-34.65-36.73-20.97-.46-37.35,14.96-37.73,35.52Z" />
          <path d="m71.54,79.94c-11.16.04-21.09-7.86-23.55-18.73-1.1-4.85-.25-5.79,4.61-5.15,11.43,1.52,20.52-7.9,18.53-19.41-.56-3.24-.18-4.89,3.57-4.35,12.18,1.77,21.41,13.05,20.44,25.06-1.05,12.9-11.12,22.53-23.61,22.57Z" />
        </g>
      )}
      {isHidden && (
        <g>
          <path d="m132.1,97.52c6.68,5.22,13.89,10.83,21.07,16.47,1.7,1.33,3.49,2.62,4.92,4.21,2.21,2.44,2.41,5.62-.13,7.51-1.72,1.28-4.68,1.19-7.08,1.14-1.1-.02-2.2-1.37-3.25-2.19C99.92,87.28,52.22,49.89,4.52,12.49c-.92-.72-1.85-1.44-2.63-2.29C-.52,7.61-.64,4.76,1.61,2.11,3.77-.43,6.59-.65,9.21,1.31c5.6,4.19,11.06,8.56,16.57,12.86,3.8,2.96,7.59,5.94,11.53,9.02.81-.46,1.55-.79,2.19-1.25C67.44,1.86,100.68,3.77,126.38,26.87c9.79,8.8,17.38,19.2,23.35,30.9,2.16,4.23,2.55,8.23-.02,12.28-5.69,8.96-11.46,17.87-17.61,27.47Zm-20.65-16.24c8.75-15.46,4.23-35.7-9.83-46.17-14.04-10.46-34.5-9.42-45.91,2.68,7.4,5.73,14.76,11.43,22.12,17.13l1.87-.64c0-3.19.47-6.47-.11-9.55-.82-4.31.68-5.06,4.47-4.22,14.3,3.16,22,15.54,18.9,30.11-.34,1.61.49,3.99,1.63,5.27,1.83,2.06,4.35,3.49,6.88,5.4Z" />
          <path d="m111.39,111.83c-13,6.48-25.45,9.45-38.57,7.57-31.17-4.47-50.33-24.27-63.39-51.23-1.12-2.32-1.02-6.09.08-8.47,2.97-6.44,6.79-12.49,10.62-19.31,7.95,6.25,15.29,11.85,22.38,17.77,1.05.88,1.17,3.25,1.18,4.93.15,21.9,16.43,37.66,38.34,37.01.5-.01,1.06.11,1.49-.07,13.15-5.63,18.28,6.58,27.88,11.8Z" />
        </g>
      )}
    </svg>
  );
}
