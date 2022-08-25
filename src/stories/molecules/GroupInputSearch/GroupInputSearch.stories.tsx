import { ComponentStory, ComponentMeta } from "@storybook/react";
import { GroupInputSearch } from "../../../components/molecules/GroupInputSearch";

export default {
  title: "Molecules/GroupInputSearch",
  component: GroupInputSearch,
} as ComponentMeta<typeof GroupInputSearch>;

const Template: ComponentStory<typeof GroupInputSearch> = (args) => (
  <GroupInputSearch {...args} />
);

export const Default = Template.bind({});

Default.args = {};
