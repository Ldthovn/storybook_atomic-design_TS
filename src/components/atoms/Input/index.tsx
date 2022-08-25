import "./style.css";

interface InputProps {
  /**
   * Whether the input is disabled
   */
  disabled?: boolean;
  placeholder?: string;
}

/**
 * A basic widget for getting the user input is a
 *  text field. Keyboard and mouse can be used for providing or changing data.
 * */

export const Input = ({ disabled, placeholder, ...props }: InputProps) => {
  return <input className="Input" placeholder={placeholder} />;
};
