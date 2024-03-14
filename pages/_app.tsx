import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { VisualEditing } from "@sanity/visual-editing/next-pages-router";
import { lazy, Suspense } from "react";

export interface SharedPageProps {
  draftMode: boolean;
  token: string;
}

const PreviewProvider = lazy(() => import("@/components/PreviewProvider"));

export default function App({
  Component,
  pageProps,
}: AppProps<SharedPageProps>) {
  const { draftMode, token } = pageProps;

  return draftMode ? (
    <PreviewProvider token={token}>
      <Component {...pageProps} />
      <Suspense>
        <VisualEditing />
      </Suspense>
    </PreviewProvider>
  ) : (
    <Component {...pageProps} />
  );
}
