import Image from "next/image";
import HomePage from "../components/HomePage";
import About from "../components/About";

export default function Home() {
  return (
    <main className="mx-auto px-4 sm:px-6">
      <HomePage />
      <About />
    </main> 
  );
}
