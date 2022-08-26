import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Page } from "./../../components/pages/PageSimple/Page";

export default {
  title: "Pages/Page",
  component: Page,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Page>;

const Template: ComponentStory<typeof Page> = (args) => <Page {...args} />;

export const PageBasic = Template.bind({});