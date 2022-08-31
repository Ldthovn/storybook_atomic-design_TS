import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Input } from "../../../components/atoms/Input";

export default {
  title: "Atoms/Input",
  component: Input,
  argTypes: {
    onChangeProp: {
      description: "Callback when user input",
      table: {
        type: {
          summary: "function(e)",
        },
      },
      control: {
        type: Function,
      },
    },
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  placeholderProp: "Placeholder...",
  valueProp: "",
  disabledProp: false,
};
