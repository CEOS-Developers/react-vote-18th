import Link from "next/link";
import HeadFunction from "../../components/HeadFunction";
//투표 페이지
export default function Vote() {
  return (
    <div>
      <HeadFunction title="Vote" />
      <h1>vote page</h1>
      <Link href="/vote/part">
        <a>파트장 투표하러 가기</a>
      </Link>
      <Link href="/vote/team">
        <a>팀 투표하러 가기</a>
      </Link>
    </div>
  );
}
