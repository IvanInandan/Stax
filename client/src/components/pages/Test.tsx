import ScrollGraphic from "../ui/ScrollGraphic";

const Test = () => {
  return (
    <>
      {/* Sections */}
      <section className="h-screen flex items-center justify-center bg-[#FAFDEE]">
        <h1 className="text-7xl font-bold text-center">Hero Section</h1>
        <ScrollGraphic />
      </section>

      <section className="h-screen flex items-center justify-center bg-[#FFD700]">
        <h2 className="text-6xl">Features</h2>
      </section>

      <section className="h-screen flex items-center justify-center bg-[#1E90FF]">
        <h2 className="text-6xl text-white">Testimonials</h2>
      </section>

      <section className="h-screen flex items-center justify-center bg-[#32CD32]">
        <h2 className="text-6xl text-white">Footer</h2>
      </section>

      <section className="h-screen flex items-center justify-center bg-[#32CD32]">
        <h2 className="text-6xl text-white">Footer</h2>
      </section>

      <section className="h-screen flex items-center justify-center bg-[#32CD32]">
        <h2 className="text-6xl text-white">Footer</h2>
      </section>

      <ScrollGraphic />
    </>
  );
};

export default Test;
