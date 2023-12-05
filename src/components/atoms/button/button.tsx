import { FC, PropsWithChildren } from "react";
import { ButtonProps } from "./button.types";
import { IconLoading } from "@/components/icons/loading/loading";

const getButtonSizeClasses = (size: ButtonProps["size"]) => {
  switch (size) {
    case "small":
      return "text-sm btn-sm";
    case "large":
      return "text-lg btn-lg";
    case "xlarge":
      return "text-xl btn-xl";
    default:
      return "text-md";
  }
};

const getVariantClasses = (variant: ButtonProps["variant"]) => {
  switch (variant) {
    case "neutral":
      return "btn btn-neutral";
    case "primary":
      return "btn btn-primary";
    case "secondary":
      return "btn btn-secondary";
    case "accent":
      return "btn btn-accent";
    case "ghost":
      return "btn btn-ghost";
    case "link":
      return "btn btn-link";
    default:
      return "btn";
  }
};

/**
 * Primary UI component for user interaction
 */
export const Button: FC<PropsWithChildren<ButtonProps>> = ({
  variant = "default",
  size = "medium",
  loading = false,
  children,
  ...props
}) => {
  const buttonSizeClasses = getButtonSizeClasses(size);
  const variantClasses = getVariantClasses(variant);
  return (
    <button
      type="button"
      className={`${buttonSizeClasses} ${variantClasses}`}
      {...props}
    >
      {loading ? <IconLoading className="animate-spin" /> : null}
      {children}
    </button>
  );
};
