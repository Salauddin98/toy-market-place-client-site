import { useLoaderData, useNavigation } from "react-router-dom";
import AllToysRow from "./AllToysRow";
import Loading from "../../Loading/Loading";
import { useState } from "react";
import useTitle from "../../Hooks/useTitle";

const AllToys = () => {
  useTitle("AllToys");
  const allToys = useLoaderData();
  const [allToy, setAllToy] = useState(allToys);
  const [searchItems, setSearchItems] = useState("");
  const [showAll, setShowAll] = useState(false);

  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return <Loading></Loading>;
  }
  const handleSearch = () => {
    fetch(
      `https://toys-server-site-salauddin98.vercel.app/getToysByText/${searchItems}`,
      {
        method: "GET",
        headers: { "content-type": "application/json" },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setAllToy(data);
      });
  };

  // another method for search emplement------>
  // useEffect(() => {
  //   fetch("https://toys-server-site-salauddin98.vercel.app/allJobs")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const filterResult = data?.filter((res) => res.status === activeTab);
  //       setJob(filterResult);
  //       // console.log(data);
  //     });
  // }, [activeTab]);

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
      <div className="space-x-2 mb-4 mt-4">
        <input
          type="text"
          placeholder="Search here"
          className="input input-bordered w-full max-w-xs"
          onChange={(e) => setSearchItems(e.target.value)}
        />
        <button onClick={handleSearch} className="btn btn-active mt-2">
          Search
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="table table-compact w-full">
          {/* head */}
          <thead>
            <tr>
              <th>No.</th>
              <th>Seller Name</th>
              <th>Toy Name</th>
              <th>Toy Category</th>
              <th>Available Quantity</th>
              <th>View Details</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}

            {/* <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Blue</td> */}
            {allToy.slice(0, showAll ? allToy.length : 6).map((toys, index) => (
              <AllToysRow index={index} toys={toys} key={toys._id}></AllToysRow>
            ))}
          </tbody>
        </table>
      </div>
      <div className="text-center mb-4">
        {!showAll && (
          <button
            onClick={() => setShowAll(!showAll)}
            className="btn btn-outline btn-secondary mt-6 "
          >
            See More
          </button>
        )}
      </div>
    </section>
  );
};

export default AllToys;
