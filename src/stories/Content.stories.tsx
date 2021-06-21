/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import { Story, Meta } from "@storybook/react";

import { Content, ContentProps } from "../lib/components/Content";

export default {
  title: "shared/Content",
  component: Content,
} as Meta;

const Template: Story<ContentProps> = (args) => <Content {...args} />;

export const Primary = Template.bind({});
