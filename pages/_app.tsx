import "../styles/home.css";
import type { AppProps } from "next/app";
import DefaultLayout from "../Layouts/DefaultLayout";
import MainLayout from "../Layouts/MainLayout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}

export default MyApp;
