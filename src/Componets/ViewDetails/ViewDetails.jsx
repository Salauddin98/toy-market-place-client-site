import Rating from "react-rating";
import { Link, useLoaderData } from "react-router-dom";
import { FaRegStar, FaStar } from "react-icons/fa";
const ViewDetails = () => {
  const viewDetailsData = useLoaderData();
  const {
    description,
    name,
    pictureURL,
    sellerEmail,
    sellerName,
    rating,
    price,
  } = viewDetailsData;

  console.log(viewDetailsData);
  return (
    <section className="bg-[url('image/pattern-home.jpg')] bg-no-repeat">
      <h1 className="text-center text-2xl md:text-3xl lg:text-4xl  font-bold py-8">
        TOYS DETAILS
        <hr className="w-24 mt-2 border-[3px] mx-auto border-orange-500" />
      </h1>
      <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-10 lg:px-8 gap-10">
        <div className="card lg:card-side bg-base-100 shadow-xl">
          <figure className="w-full lg:w-2/5">
            <img
              className="rounded-md w-full md:h-1/5 lg:h-full lg:2/5"
              src={pictureURL}
              alt="Album"
            />
          </figure>
          <div className="p-6 flex flex-col justify-center items-center text-center w-full lg:w-3/5 space-y-3">
            <h2 className=" text-4xl font-bold title-text">{name}</h2>
            <p className=" text-base font-medium text-slate-400 w-full lg:w-4/5 mx-auto">
              {description}
            </p>
            <p className="text-lg text-slate-500 font-bold">
              Name: {sellerName}
            </p>
            <p className="text-lg text-slate-500 font-bold">
              Email: {sellerEmail}
            </p>
            <p className="text-lg text-slate-500 font-bold">Price: ${price}</p>
            <Rating
              placeholderRating={rating}
              readonly
              emptySymbol={<FaRegStar></FaRegStar>}
              placeholderSymbol={<FaStar className="text-warning"></FaStar>}
              fullSymbol={<FaStar></FaStar>}
            ></Rating>
            <Link to="/">
              {" "}
              <button className="btn btn-outline">Back To Home</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ViewDetails;
