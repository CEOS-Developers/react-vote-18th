import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <div>
      {/* 여기에 ceos로고같은거? */}
      "CEOS 7주차 과제: REDDI 팀"
      <Component {...pageProps} />
    </div>
  );
}
