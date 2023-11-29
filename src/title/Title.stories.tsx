import { Meta, StoryFn } from "@storybook/react";
import Title, { TitleProps } from "./Title";

export default {
  title: "Components/Title",
  component: Title,
} as Meta;

const Template: StoryFn<TitleProps> = (args) => <Title {...args} />;

export const Basic = Template.bind({});
