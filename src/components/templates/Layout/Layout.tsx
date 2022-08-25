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
    <article className={`Layout ${className} bg-lime-200`} style={style}>
      <header className="Layout-header text-center px-3 py-5">Header</header>
      <div className="Layout-content text-center py-24 bg-lime-300">Content</div>
      <footer className="Layout-footer text-center px-3 py-5">Footer</footer>
    </article>
  );
};
