/* eslint-disable @typescript-eslint/no-unused-vars */

export type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "tertiary";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

function getVariant(
  variant: ButtonProps["variant"],
  disabled: ButtonProps["disabled"],
) {
  switch (variant) {
    case "primary":
      return disabled
        ? "bg-disabled text-disabled"
        : "bg-primary text-tertiary border-2 border-primary";
    case "secondary":
      return disabled
        ? "bg-disabled text-disabled"
        : "bg-tertiary text-primary border-2 border-primary";
    case "tertiary":
      return disabled
        ? "bg-none text-disabled"
        : "text-primary active:text-secondary";
    default:
      return disabled ? "" : "";
  }
}

const Button = ({
  variant = "primary",
  children,
  className,
  disabled,
  ...rest
}: ButtonProps) => {
  return (
    <button
      className={`
    rounded-full
    font-bold
    px-xs
    active:border-secondary active:inset-2 
    w-max
    flex items-center gap-1
    ${className}
    ${getVariant(variant, disabled)}
    `}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
