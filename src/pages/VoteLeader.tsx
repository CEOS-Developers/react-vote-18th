import Button from "@/common/ui/buttons/Button/Button";
import PageMainText from "@/common/ui/text/PageMainText/PageMainText";
import VoteSelect from "@/features/vote/components/voteSelect/VoteSelect";
import { SELECT_TYPE } from "@/features/vote/constants/select-vote-type";

const VoteLeader = () => {
  const leaders = [
    { mainText: "김현민", subText: "LocalMood" },
    { mainText: "김지원", subText: "LocalMood" },
    { mainText: "노이진", subText: "Reddigg" },
    { mainText: "신동현", subText: "Reddigg" },
    { mainText: "정인영", subText: "셰어마인드" },
    { mainText: "이규호", subText: "셰어마인드" },
    { mainText: "변지혜", subText: "Gotcha" },
    { mainText: "이은비", subText: "Gotcha" },
    { mainText: "오대균", subText: "Sniff" },
    { mainText: "송지석", subText: "Sniff" },
  ]; //API 연결

  return (
    <div>
      <PageMainText text="FE 파트장 투표" />
      <div>
        {leaders.map((leader, index) => (
          <VoteSelect
            key={index}
            type={SELECT_TYPE.PartLeader}
            mainText={leader.mainText}
            subText={leader.subText}
          />
        ))}
      </div>
      <Button addClass="margin:3.2rem;">투표하기</Button>
      <Button addClass="margin:3.2rem;">결과보기</Button>
    </div>
  );
};

export default VoteLeader;
