import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Alert } from "../../../components/atoms/Alert";

export default {
  title: "Atoms/Alert",
  component: Alert,
} as ComponentMeta<typeof Alert>;

const Template: ComponentStory<typeof Alert> = (args) => <Alert {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  message: "Good Morning! Start your day with some alerts.",
  type: "success",
};
