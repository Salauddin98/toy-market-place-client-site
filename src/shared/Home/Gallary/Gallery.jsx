// import science1 from "../../../image/science1.jpg";
import science2 from "../../../image/science2.jpg";
import science3 from "../../../image/science3.jpg";
import science4 from "../../../image/science.jpg";
import math1 from "../../../image/matn1.jpg";
import math2 from "../../../image/math2.jpg";
import math3 from "../../../image/math3.jpg";
import math4 from "../../../image/math4.jpg";
import eng1 from "../../../image/eng1.jpg";
import eng2 from "../../../image/eng2.jpg";
const Gallery = () => {
  return (
    <section className="bg-[url('image/pattern-home.jpg')] bg-no-repeat mt-10">
      <h1 className="text-center text-2xl md:text-3xl lg:text-4xl font-bold py-8">
        OUR TOYS GALLERY
        <hr className="w-28 mt-2 border-[3px] mx-auto border-orange-500" />
      </h1>
      <div
        className="max-w-7xl mx-auto px-2 md:px-6 lg:px-8 dark:bg-gray-800 dark:text-gray-50"
        data-aos="zoom-in"
      >
        <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
          <img
            src={science4}
            alt=""
            className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square object-cover"
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square object-cover"
            src={science2}
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square object-cover"
            src={science3}
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square object-cover"
            src={math1}
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square object-cover"
            src={math2}
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square object-cover"
            src={math3}
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square object-cover"
            src={eng2}
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square object-cover"
            src={eng1}
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square object-cover"
            src={science4}
          />
          <img
            src={math4}
            alt=""
            className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-1 md:row-start-3  dark:bg-gray-500 aspect-square object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
