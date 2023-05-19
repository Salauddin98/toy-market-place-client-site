import { useForm } from "react-hook-form";

const UpdateToys = ({ toys }) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="w-full mx-auto px-4 py-5 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-10 lg:px-8 ">
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* grid grid-cols-1 md:grid-cols-2 */}
        <div className="flex flex-col md:flex-row md:gap-4">
          {" "}
          <div className="mb-4 sm:w-full md:w-3/6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              defaultValue={toys?.name}
              placeholder="Enter name"
              {...register("name", { required: true })}
            />
          </div>
          <div className="mb-4 sm:w-full md:w-3/6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="picture-url"
            >
              Picture URL
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="picture-url"
              type="text"
              defaultValue={toys?.pictureURL}
              placeholder="Enter picture URL"
              {...register("pictureURL", { required: true })}
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:gap-4">
          <div className="mb-4 sm:w-full md:w-3/6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="seller-name"
            >
              Seller Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="seller-name"
              type="text"
              defaultValue={toys?.displayName}
              placeholder="Enter seller name"
              {...register("sellerName", { required: true })}
            />
          </div>
          <div className="mb-4 sm:w-full md:w-3/6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="seller-email"
            >
              Seller Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="seller-email"
              type="email"
              defaultValue={toys?.email}
              placeholder="Enter seller email"
              {...register("sellerEmail", { required: true })}
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:gap-4">
          <div className="mb-4 sm:w-full md:w-3/6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="sub-category"
            >
              Sub-category
            </label>
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="sub-category"
              {...register("subCategory", { required: true })}
              defaultValue={toys?.subCategory}
            >
              <option value="">Select Toys Category</option>
              <option value="Math Toys">Math Toys</option>
              <option value="Engineering Toys">Engineering Toys</option>
              <option value="Science Toys">Science Toys</option>
            </select>
          </div>
          <div className="mb-4 sm:w-full md:w-3/6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="price"
            >
              Price
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="price"
              type="number"
              defaultValue={toys?.quantity}
              placeholder="Enter price"
              {...register("price", { required: true })}
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:gap-4">
          <div className="mb-4 sm:w-full md:w-3/6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="rating"
            >
              Rating
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="rating"
              type="number"
              step="0.1"
              min="0"
              max="5"
              defaultValue={toys?.rating}
              placeholder="Enter rating"
              {...register("rating", { required: true })}
            />
          </div>
          <div className="mb-4 sm:w-full md:w-3/6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="quantity"
            >
              Available Quantity
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="quantity"
              type="number"
              defaultValue={toys?.quantity}
              placeholder="Enter available quantity"
              {...register("quantity", { required: true })}
            />
          </div>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="description"
          >
            Detail Description
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="description"
            rows="4"
            placeholder="Enter detail description"
            defaultValue={toys?.description}
            {...register("description", { required: true })}
          ></textarea>
        </div>
        <div className="flex items-center justify-center">
          <button className="btn btn-outline btn-primary" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateToys;
