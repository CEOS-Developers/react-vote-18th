import "../styles/globals.css";
import Layout from "../components/Layout";
import { RecoilRoot } from "recoil";
import {
  QueryClient,
  QueryClientProvider,
  QueryCache,
} from "@tanstack/react-query";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const queryClient = new QueryClient({
    queryCache: new QueryCache({
      onError: (error) => toast.error(`Something went wrong: ${error.message}`),
    }),
  });

  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </RecoilRoot>
    </QueryClientProvider>
  );
}
