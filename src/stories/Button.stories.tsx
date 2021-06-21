/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import { Story, Meta } from "@storybook/react";

import { Button, ButtonProps } from "../lib/components/Button";

export default {
  title: "shared/Button",
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args}>Fun</Button>;

export const Primary = Template.bind({});
