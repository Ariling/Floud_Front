import Nav from "@/components/util/\bNav";
import "@/styles/globals.css";
import { useRouter } from "next/router";
import { RecoilRoot } from "recoil";
import "../styles/swiper.scss";
import "swiper/css";
import "swiper/css/effect-cards";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  return (
    <RecoilRoot>
      {router.pathname === "/" ||
      router.pathname === "/waiting" ||
      router.pathname === "/login" ||
      router.pathname === "/signup" ||
      router.pathname === "/memoir/[...memoirId]"
      ? null : (
        <Nav />
      )}
      <Component {...pageProps} />
    </RecoilRoot>
  );
}
