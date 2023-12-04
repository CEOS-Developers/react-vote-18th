import type { Meta, StoryObj } from "@storybook/react";
import FormInput from "../formInput/FormInput";

const meta: Meta<typeof FormInput> = {
  title: "UI/Input/FormInput",
  component: FormInput,
};

export default meta;
type Story = StoryObj<typeof FormInput>;

export const Default: Story = {
  args: {
    placeholder: "아이디",
  },
};

export const Disabled: Story = {
  args: {
    placeholder: "아이디",
    disabled: true,
    errorMsg: "해당 아이디를 가진 유저가 없습니다.",
  },
};
