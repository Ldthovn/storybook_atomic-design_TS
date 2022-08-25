import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Input } from "../../../components/atoms/Input";

export default {
  title: "Atoms/Input",
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  placeholder: "Basic use",
  disabled: false,
};
