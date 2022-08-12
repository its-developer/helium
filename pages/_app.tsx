// import "../styles/globals.css";
import "../styles/home.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import type { AppProps } from "next/app";
import DefaultLayout from "../Layouts/DefaultLayout";
import { MantineProvider } from "@mantine/core";
import MainLayout from "../Layouts/MainLayout";

function MyApp({ Component, pageProps }: AppProps) {
  const Layout = DefaultLayout;
  return (
    <Layout>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colorScheme: "dark",
        }}
      >
        <Component {...pageProps} />
      </MantineProvider>
    </Layout>
  );
}

export default MyApp;
