import { Button } from "../../atoms/Button/Button";
import { Input } from "../../atoms/Input";
import "./style.css";

interface GroupInputSearchProps {
  placeholder?: string;
}

export const GroupInputSearch = ({
  placeholder,
  ...props
}: GroupInputSearchProps) => {
  return (
    <div className="GroupInputSearch">
      <Input placeholder={placeholder} />
      <Button label="Search" />
    </div>
  );
};
