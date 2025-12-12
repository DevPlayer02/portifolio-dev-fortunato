import { ButtonHTMLAttributes } from "react";

type AppearanceType = "primary" | "secondary" | "tertiary";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  appearance?: AppearanceType;
};

const getAppearanceStyle = (appearance: AppearanceType) =>
  ({
    primary:
      "bg-main-blue text-primary border border-main-white hover:bg-main-blue-hover active:bg-main-blue transition-transform duration-200 hover:scale-110 hover:-translate-y-1",

    secondary:
      "bg-dark-grey border-solid border-2 border-[#2A3343] hover:bg-dark-grey-hover hover:border-main-white active:bg-dark-grey transition-transform duration-200 hover:scale-110 hover:-translate-y-1",

    tertiary:
      "bg-primary border-4 border-main-light-grey text-black hover:bg-primary/80 active:bg-primary transition-transform duration-200 hover:scale-110 hover:-translate-y-1",
  }[appearance]);

const Button = ({ onClick, children, appearance, className }: ButtonProps) => {
  const commonStyles = "cursor-pointer border-none rounded-lg font-bold";
  const appearanceStyles = getAppearanceStyle(appearance ?? "primary");

  return (
    <button
      className={`${commonStyles} ${appearanceStyles} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
