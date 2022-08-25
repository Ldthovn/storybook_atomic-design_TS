import { Button } from "../../atoms/Button/Button";
import { Input } from "../../atoms/Input";
import "./style.css";

interface GroupInputSearchProps {}

export const GroupInputSearch = ({ ...props }: GroupInputSearchProps) => {
  return (
    <div className="GroupInputSearch">
      <Input />
      <Button label="Search" primary />
    </div>
  );
};
