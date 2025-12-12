import Projects from "@/components/Projects/Projects";
import Hero from "../components/Hero/Hero";
import ProvidedServices from "@/components/Provided Services/ProvidedServices";
import Action from "@/components/Action/Action";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <div>
      <Hero />
      <Projects />
      <ProvidedServices />
      <Action />
      <Footer />
    </div>
  );
}
