import withTwindApp from "@twind/next/shim/app";
import twindConfig from "../twind.config";
import { tw } from "twind";
import "@steakscience/matte";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  // Ensure classes from _document are available during SSR
  tw`font-sans bg-background-app text-base text-body`
  return <Component {...pageProps} />
}

export default withTwindApp(twindConfig, MyApp);
