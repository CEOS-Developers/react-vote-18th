import type { Meta, StoryObj } from "@storybook/react";
import { SELECT_TYPE } from "../../constants/select-vote-type";
import VoteSelect from "./VoteSelect";

const meta: Meta<typeof VoteSelect> = {
  component: VoteSelect,
};

export default meta;
type Story = StoryObj<typeof VoteSelect>;

export const Category: Story = {
  args: {
    type: SELECT_TYPE.Category,
    mainText: "파트장 투표 바로가기",
    subText: "",
  },
};

export const PartLeader: Story = {
  args: {
    type: SELECT_TYPE.PartLeader,
    mainText: "김현민",
    subText: "LocalMood",
  },
};

export const Demoday: Story = {
  args: {
    type: SELECT_TYPE.Demoday,
    mainText: "LocalMood",
    subText: "키워드로 찾는 나만의 장소",
  },
};
