import { type FC } from "react";

const PhosphorIconsLoader: FC = () => {
  const weights: string[] = [
    "regular",
    "thin",
    "light",
    "bold",
    "fill",
    "duotone",
  ];

  return (
    <>
      {weights.map((weight) => (
        <link
          key={weight}
          rel='stylesheet'
          href={`https://unpkg.com/@phosphor-icons/web@2.1.1/src/${weight}/style.css`}
        />
      ))}
    </>
  );
};

export default PhosphorIconsLoader;
