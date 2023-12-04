import type { Meta, StoryObj } from "@storybook/react";
import VoteResult from "./VoteResult";
import { SELECT_TYPE } from "../../constants/select-vote-type";

const meta: Meta<typeof VoteResult> = {
  component: VoteResult,
};

export default meta;
type Story = StoryObj<typeof VoteResult>;

export const PartLeader: Story = {
  args: {
    type: SELECT_TYPE.PartLeader,
    mainText: "김현민",
    subText: "LocalMood",
    rank: 2,
    voteNum: 1,
  },
};

export const Demoday: Story = {
  args: {
    type: SELECT_TYPE.Demoday,
    mainText: "김현민",
    subText: "LocalMood",
    rank: 2,
    voteNum: 1,
  },
};
