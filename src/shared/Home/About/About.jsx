import person from "../../../image/banner3.jpg";
import person2 from "../../../image/banner1.jpg";
const About = () => {
  return (
    <section className="mt-6">
      <div className="max-w-7xl mx-auto px-2 md:px-6 lg:px-8">
        <h1 className="text-center text-2xl md:text-3xl lg:text-4xl font-bold py-8">
          ABOUT US
          <hr className="w-20 mt-2 border-[3px] mx-auto border-orange-500" />
        </h1>
        <div className="hero-content flex-col lg:flex-row" data-aos="zoom-in">
          <div className="lg:w-1/2 relative">
            <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
            <img
              src={person2}
              className="w-1/2 max-w-sm rounded-lg shadow-2xl absolute right-5 top-1/2 border-4 border-white"
            />
          </div>
          <div className="lg:w-1/2 space-y-5 p-4">
            <h1 className="text-2xl font-bold space-y-3 mt-8 lg:mt-0 lg:text-center">
              A kids toy shop is a selling toys designed specifically for
              children.
            </h1>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which do not look even
              slightly believable.{" "}
            </p>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which do not look even
              slightly believable.{" "}
            </p>
            <button className="btn btn-outline btn-secondary">
              Get More Info
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
