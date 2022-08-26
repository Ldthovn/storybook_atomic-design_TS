import { ReactNode } from "react";
import "./style.css";

interface AlertProps {
  /**
   * Content of Alert
   */
  message: ReactNode;
  /**
   * Type of Alert styles, options: success, info, warning, error
   */
  type: "success" | "info" | "warning" | "danger";
}

/**
 * Alert component for feedback.
 */

export const Alert = ({ message, type, ...props }: AlertProps) => {
  return (
    <div className="Alert my-5 mx-auto rounded" {...props}>
      <span className={`Alert-text Alert-${type}`}>{message}</span>
    </div>
  );
};
