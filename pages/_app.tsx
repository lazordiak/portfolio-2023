import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "@/store/store";
import { Suspense } from "react";
import LoadingSpinner from "@/components/common/LoadingSpinner";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Suspense fallback={<LoadingSpinner />}>
        <Component {...pageProps} />
      </Suspense>
    </Provider>
  );
}
