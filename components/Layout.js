import Image from "next/image";
export default function Layout({ children }) {
  return (
    <>
      <Image src="/images/ceosIcon.svg" width={200} height={80} />
      {/* "CEOS 7주차 과제: REDDI 팀" */}
      <div>{children}</div>
    </>
  );
}
