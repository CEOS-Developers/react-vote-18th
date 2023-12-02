import { Meta, StoryFn } from "@storybook/react";
import Button from "./Buttons";
import { ButtonProps } from "../../state/button-props";

export default {
  title: "Components/common/Button",
  component: Button,
} as Meta;

const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />;

export const CommonButton = Template.bind({});
CommonButton.args = {
  width: "15rem",
  height: "8rem",
  bgColor: "skyblue",
  addClass: "border-radius:3rem",
};
