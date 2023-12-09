import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Buttons";

const meta: Meta<typeof Button> = {
  title: "UI/button/Button",
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const ButtonLayout: Story = {
  args: {
    width: "",
    height: "",
    bgColor: "",
  },
};
