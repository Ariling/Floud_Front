import Nav from "@/components/util/\bNav";
import "@/styles/globals.css";
import { useRouter } from "next/router";
import { RecoilRoot } from "recoil";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  return (
    <RecoilRoot>
      {router.pathname === "/" || router.pathname === "/waiting" ? null : (
        <Nav />
      )}
      <Component {...pageProps} />
    </RecoilRoot>
  );
}
