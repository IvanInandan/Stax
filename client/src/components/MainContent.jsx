import Header from "./MantineUI/Header";
import Hero from "./MantineUI/Hero";
import About from "./MantineUI/About";
import Features from "./MantineUI/Features";
import Faq from "./MantineUI/Faq";
import Contact from "./MantineUI/Contact";
import Footer from "./MantineUI/Footer";
import Parallax from "./Parallax";

const MainContent = () => {
  return (
    <div>
      <Header />

      <Parallax />

      <section
        id="hero"
        className="h-screen flex justify-start items-center p-10"
      >
        <div className="w-full flex justify-start">
          <Hero />
        </div>
      </section>

      <section
        id="features"
        className="h-screen flex justify-center items-center p-10"
      >
        <Features />
      </section>

      <section
        id="about"
        className="h-screen flex justify-center items-center p-10"
      >
        <div className="w-full">
          <About />
        </div>
      </section>

      <section
        id="faq"
        className="h-screen flex justify-center items-center p-10"
      >
        <div className="w-9/12">
          <Faq />
        </div>
      </section>

      <section
        id="contact"
        className="h-screen flex justify-center items-center p-10"
      >
        <Contact />
      </section>

      <Footer />
    </div>
  );
};

export default MainContent;
