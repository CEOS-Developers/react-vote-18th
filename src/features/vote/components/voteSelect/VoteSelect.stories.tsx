import { Meta, StoryFn } from "@storybook/react";
import VoteSelect from "./VoteSelect";
import { VoteSelectionProps } from "../../state/vote-state";
import { SELECT_TYPE } from "../../constants/select-vote-type";

export default {
  title: "Components/VoteSelect",
  component: VoteSelect,
} as Meta;

const Template: StoryFn<VoteSelectionProps> = (args) => (
  <VoteSelect {...args} />
);

export const VoteCategory = Template.bind({});
VoteCategory.args = {
  type: SELECT_TYPE.Category,
  mainText: "파트장 투표 바로가기",
  subText: "",
};

const Template1: StoryFn<VoteSelectionProps> = (args) => (
  <VoteSelect {...args} />
);

export const VotePartLeader = Template1.bind({});
VotePartLeader.args = {
  type: SELECT_TYPE.PartLeader,
  mainText: "김현민",
  subText: "LocalMood",
};

const Template2: StoryFn<VoteSelectionProps> = (args) => (
  <VoteSelect {...args} />
);

export const VoteDemoday = Template2.bind({});
VoteDemoday.args = {
  type: SELECT_TYPE.Demoday,
  mainText: "LocalMood",
  subText: "키워드로 찾는 나만의 장소",
};
