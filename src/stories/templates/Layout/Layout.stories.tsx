import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Layout } from "../../../components/templates/Layout/Layout";

export default {
  title: "Templates/Layout",
  component: Layout,
} as ComponentMeta<typeof Layout>;

const Template: ComponentStory<typeof Layout> = (args) => <Layout {...args} />;

export const Basic = Template.bind({});

Basic.args = {};
