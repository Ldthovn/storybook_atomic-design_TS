import { ChangeEventHandler } from "react";
import "./style.css";

interface InputProps {
  /**
   * Whether the input is disabled
   */
  disabledProp?: boolean;
  placeholderProp?: string;
  /**
   * The input content value
   * */ 
  valueProp?: string;
  onChangeProp?: ChangeEventHandler<HTMLInputElement>;
  name: string;
}

/**
 * A basic widget for getting the user input is a
 *  text field. Keyboard and mouse can be used for providing or changing data.
 * */

export const Input = ({
  disabledProp,
  placeholderProp,
  valueProp,
  onChangeProp,
  name,
  ...props
}: InputProps) => {
  return (
    <input
      disabled={disabledProp}
      className="Input"
      placeholder={placeholderProp}
      value={valueProp}
      name= {name}
      onChange={onChangeProp}
    />
  );
};
