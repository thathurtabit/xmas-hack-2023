export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  /**
   * Is this the principal call to action on the page?
   */
  variant?: "default" | "primary" | "secondary" | "neutral" | "accent" | "ghost" | "link";
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large" | "xlarge";
  /**
   * Is loading?
   */
  loading?: boolean;
  /**
   * Button contents
   */
  onClick?: () => void;
}
