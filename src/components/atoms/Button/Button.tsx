import React from "react";
import "./button.css";

interface ButtonProps {
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large";
  /**
   * Button contents
   */
  label: string;
  regime?: "Filled" | "Outline";
  /**
   * Option to fit button width to its parent width
   */
  block?: boolean;
  /**
   * Optional click handler
   */
  onClick?: () => void;
  /**
   * Is this the principal call to action on the page?
   */
  typeColor?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "dark";
  type?: "button" | "submit" | "reset" | undefined;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  size = "medium",
  backgroundColor,
  label,
  block = false,
  typeColor = "primary",
  regime = "Filled",
  type,
  ...props
}: ButtonProps) => {
  const modeTypeColor = (typeColor: any) => {
    if (typeColor === "primary") {
      return "primaryColor";
    }
    if (typeColor === "secondary") {
      return "secondaryColor";
    }
    if (typeColor === "success") {
      return "successColor";
    }
    if (typeColor === "danger") {
      return "dangerColor";
    }
    if (typeColor === "warning") {
      return "warningColor";
    }
    if (typeColor === "info") {
      return "infoColor";
    }
    if (typeColor === "dark") {
      return "darkColor";
    }
  };
  return (
    <button
      type={type}
      style={{ backgroundColor }}
      className={[
        "storybook-button",
        `storybook-button--${size}`,
        block && "block",
        regime !== "Outline" && modeTypeColor(typeColor),
        regime,
      ].join(" ")}
      {...props}
    >
      {label}
    </button>
  );
};
