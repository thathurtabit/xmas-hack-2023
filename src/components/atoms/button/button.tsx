import { FC } from "react";
import { ButtonProps } from "./button.types";

const getButtonSizeClasses = (size: ButtonProps["size"]) => {
  switch (size) {
    case "small":
      return "text-sm";
    case "medium":
      return "text-md";
    case "large":
      return "text-lg";
    default:
      return "text-md";
  }
};

const getVariantClasses = (isPrimary: ButtonProps["primary"]) => {
  switch (isPrimary) {
    case true:
      return "bg-white text-black";
    default:
      return "bg-black text-white";
  }
};

/**
 * Primary UI component for user interaction
 */
export const Button: FC<ButtonProps> = ({
  primary = true,
  size = "medium",
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  const buttonSizeClasses = getButtonSizeClasses(size);
  const variantClasses = getVariantClasses(primary);
  return (
    <button
      type="button"
      className={`bg-transparent ${buttonSizeClasses} ${variantClasses}`}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};
