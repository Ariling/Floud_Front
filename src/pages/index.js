import Image from "next/image";
import { Inter } from "next/font/google";
import LandingButton from "@/components/landing/LandingButton";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen w-screen flex-col items-center justify-center ${inter.className}`}
    >
      <LandingButton />
    </main>
  );
}
