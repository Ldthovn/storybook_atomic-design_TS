import { CSSProperties, ReactNode, useState } from "react";
import { Header } from "../../organisms/Header/Header";
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
  /**
   * Add image for banner
   */
  srcImg?: string;
  /**
   * children
   */

  children?: ReactNode;
  contentContact?: ReactNode;
}

/**
 * Handling the overall layout of a page.
 */

type User = {
  name: string;
};

export const Layout = ({
  className,
  style,
  srcImg,
  children,
  contentContact,
  ...props
}: LayoutProps) => {
  const [user, setUser] = useState<User>();
  return (
    <article className={`Layout ${className}`} style={style}>
      <Header
        user={user}
        onLogin={() => setUser({ name: "Le Tho" })}
        onLogout={() => setUser(undefined)}
        onCreateAccount={() => setUser({ name: "Le Tho" })}
      />
      <div className="Banner-content flex items-center">
        <img
          src={srcImg}
          alt="Pic Banner Null"
          className="imgLayout w-1/2 bg-slate-300 object-cover"
        />
        <div className="Layout-des text-center w-1/2">{children}</div>
      </div>
      <div className="Contact text-center my-8 px-8">{contentContact}</div>
      <footer className="Layout-footer text-center px-3 py-5 bg-slate-200">
        © 2016 MoGo free PSD template by
      </footer>
    </article>
  );
};
