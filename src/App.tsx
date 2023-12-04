import VoteResult from "./features/vote/components/voteResult/VoteResult";
import { SELECT_TYPE } from "./features/vote/constants/select-vote-type";

function App() {
  return (
    <VoteResult
      type={SELECT_TYPE.PartLeader}
      mainText="김현민"
      subText="LocalMood"
      rank={2}
      voteNum={1}
    />
  );
}

export default App;
