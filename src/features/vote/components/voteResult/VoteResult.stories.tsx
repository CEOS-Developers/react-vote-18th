import { Meta, StoryFn } from "@storybook/react";
import { VoteResultProps } from "../../state/vote-state";
import { SELECT_TYPE } from "../../constants/select-vote-type";
import VoteResult from "./VoteResult";

export default {
  title: "Components/vote/VoteResult",
  component: VoteResult,
} as Meta;

const Template: StoryFn<VoteResultProps> = (args) => <VoteResult {...args} />;

export const PartLeaderVoteResult = Template.bind({});
PartLeaderVoteResult.args = {
  type: SELECT_TYPE.PartLeader,
  mainText: "김현민",
  subText: "LocalMood",
  rank: 2,
  voteNum: 1,
};

const Template1: StoryFn<VoteResultProps> = (args) => <VoteResult {...args} />;

export const DemodayVoteResult = Template1.bind({});
DemodayVoteResult.args = {
  type: SELECT_TYPE.Demoday,
  mainText: "김현민",
  subText: "LocalMood",
  rank: 2,
  voteNum: 1,
};
