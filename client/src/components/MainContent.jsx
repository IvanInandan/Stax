import Header from "./MantineUI/Header";
import Hero from "./MantineUI/Hero";
import About from "./MantineUI/About";
import Features from "./MantineUI/Features";
import Faq from "./MantineUI/Faq";
import Contact from "./MantineUI/Contact";
import Footer from "./MantineUI/Footer";

const MainContent = () => {
  return (
    <div>
      <Header />

      <section id="hero">
        <Hero />
      </section>

      <section id="features">
        <Features />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="faq">
        <div style={{ marginLeft: "16rem" }}>
          <Faq />
        </div>
      </section>

      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </div>
  );
};

export default MainContent;
