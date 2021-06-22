/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import { Story, Meta } from "@storybook/react";

import { CalendarLabels, CalendarLabelsProps } from "./index";

export default {
  title: "shared/CalendarLabels",
  component: CalendarLabels,
} as Meta;

const Template: Story<CalendarLabelsProps> = (args) => (
  <CalendarLabels {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
