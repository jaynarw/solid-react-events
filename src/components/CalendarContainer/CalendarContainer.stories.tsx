/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import { Story, Meta } from "@storybook/react";

import { CalendarContainer, CalendarContainerProps } from ".";

export default {
  title: "shared/CalendarContainer",
  component: CalendarContainer,
} as Meta;

const Template: Story<CalendarContainerProps> = (args) => (
  <div style={{ height: "100%", width: "100%" }}>
    <CalendarContainer {...args} />
  </div>
);

export const Primary = Template.bind({});
