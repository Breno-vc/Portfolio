import Image from "next/image";
import Hero from "@/components/main/Hero";
import Skills from "@/components/main/Skills";
import Encryption from "@/components/main/Encryption";
import Projects from "@/components/main/Projects";

export default function Home() {
  return (
    <main className="w-full h-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <Skills />
        <Projects />
        <Encryption />
      </div>
    </main>
  );
}
