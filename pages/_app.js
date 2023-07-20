import "@/styles/globals.css";
import axios from "axios";

axios.defaults.baseURL = "https://nextb-production.up.railway.app";
export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
