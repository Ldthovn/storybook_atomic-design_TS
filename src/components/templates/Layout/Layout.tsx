import { CSSProperties } from "react";
import "./layout.css";

interface LayoutProps {
  /**
   * Container className
   */
  className?: string;
  /**
   * To customize the styles
   */
  style?: CSSProperties;
}

/**
 * Handling the overall layout of a page.
 */

export const Layout = ({ className, style }: LayoutProps) => {
  return (
    <article className={`Layout ${className}`} style={style}>
      <header className="Layout-header">Header</header>
      <div className="Layout-content">Content</div>
      <footer className="Layout-footer">Footer</footer>
    </article>
  );
};
