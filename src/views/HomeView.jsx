import AboutMe from "../components/AboutMe";
import Contact from "../components/Contact";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Footer from "../components/Footer";

export default function HomeView() {
  return (
    <>
      <div className="container mx-auto max-w-screen-xl">
        <Hero />
        <AboutMe />
        <Projects />
        <Contact />
      </div>
      <Footer showLinks={false} />
    </>
  );
}
