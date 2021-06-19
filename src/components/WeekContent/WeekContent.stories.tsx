/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import { Story, Meta } from "@storybook/react";
import dayjs from "dayjs";

import { WeekContent, WeekContentProps } from "./index";

export default {
  title: "shared/WeekContent",
  component: WeekContent,
} as Meta;

const Template: Story<WeekContentProps> = (args) => <WeekContent {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  date: dayjs(),
};
