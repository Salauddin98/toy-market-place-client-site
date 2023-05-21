import science2 from "../../../image/science2.jpg";
import science3 from "../../../image/science3.jpg";
import science4 from "../../../image/science.jpg";
import math1 from "../../../image/matn1.jpg";
import math2 from "../../../image/math2.jpg";

import math4 from "../../../image/math4.jpg";

import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
const TrendingProduct = () => {
  return (
    <section className="bg-[url('image/pattern-home.jpg')] bg-no-repeat mt-10 mb-10">
      <h1 className="text-center text-2xl md:text-3xl lg:text-4xl font-bold py-8">
        OUR TRENDING PRODUCTS
        <hr className="w-28 mt-2 border-[3px] mx-auto border-orange-500" />
      </h1>
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-10 lg:px-8 gap-10"
        data-aos="zoom-in"
      >
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={science2} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title font-bold text-gray-500">
              Electrical Toys
            </h2>
            <p className="text-xl font-bold">$10</p>
            <Rating
              placeholderRating={4}
              readonly
              emptySymbol={<FaRegStar></FaRegStar>}
              placeholderSymbol={<FaStar className="text-warning"></FaStar>}
              fullSymbol={<FaStar></FaStar>}
            ></Rating>
            <div className="card-actions ">
              <button className="btn btn-outline btn-primary w-full">
                Order Now
              </button>
            </div>
          </div>
        </div>
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={science3} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title font-bold text-gray-500">
              Electrical Toys
            </h2>
            <p className="text-xl font-bold">$15</p>
            <Rating
              placeholderRating={5}
              readonly
              emptySymbol={<FaRegStar></FaRegStar>}
              placeholderSymbol={<FaStar className="text-warning"></FaStar>}
              fullSymbol={<FaStar></FaStar>}
            ></Rating>
            <div className="card-actions ">
              <button className="btn btn-outline btn-primary w-full">
                Order Now
              </button>
            </div>
          </div>
        </div>
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={science4} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title font-bold text-gray-500">Science Toys</h2>
            <p className="text-xl font-bold">$20</p>
            <Rating
              placeholderRating={5}
              readonly
              emptySymbol={<FaRegStar></FaRegStar>}
              placeholderSymbol={<FaStar className="text-warning"></FaStar>}
              fullSymbol={<FaStar></FaStar>}
            ></Rating>
            <div className="card-actions ">
              <button className="btn btn-outline btn-primary w-full">
                Order Now
              </button>
            </div>
          </div>
        </div>
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={math1} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title font-bold text-gray-500">Math Toys</h2>
            <p className="text-xl font-bold">$12</p>
            <Rating
              placeholderRating={2}
              readonly
              emptySymbol={<FaRegStar></FaRegStar>}
              placeholderSymbol={<FaStar className="text-warning"></FaStar>}
              fullSymbol={<FaStar></FaStar>}
            ></Rating>
            <div className="card-actions ">
              <button className="btn btn-outline btn-primary w-full">
                Order Now
              </button>
            </div>
          </div>
        </div>
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={math2} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title font-bold text-gray-500">Math Toys</h2>
            <p className="text-xl font-bold">$18</p>
            <Rating
              placeholderRating={4}
              readonly
              emptySymbol={<FaRegStar></FaRegStar>}
              placeholderSymbol={<FaStar className="text-warning"></FaStar>}
              fullSymbol={<FaStar></FaStar>}
            ></Rating>
            <div className="card-actions ">
              <button className="btn btn-outline btn-primary w-full">
                Order Now
              </button>
            </div>
          </div>
        </div>

        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={math4} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title font-bold text-gray-500">Math Toys</h2>
            <p className="text-xl font-bold">$25</p>
            <Rating
              placeholderRating={5}
              readonly
              emptySymbol={<FaRegStar></FaRegStar>}
              placeholderSymbol={<FaStar className="text-warning"></FaStar>}
              fullSymbol={<FaStar></FaStar>}
            ></Rating>
            <div className="card-actions ">
              <button className="btn btn-outline btn-primary w-full">
                Order Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrendingProduct;
