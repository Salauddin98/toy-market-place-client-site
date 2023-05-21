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
    fetch(`http://localhost:5000/getToysByText/${searchItems}`, {
      method: "GET",
      headers: { "content-type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setAllToy(data);
      });
  };

  // another method for search emplement------>
  // useEffect(() => {
  //   fetch("http://localhost:5000/allJobs")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const filterResult = data?.filter((res) => res.status === activeTab);
  //       setJob(filterResult);
  //       // console.log(data);
  //     });
  // }, [activeTab]);

  return (
    <section>
      <div className="overflow-x-auto px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-10 lg:px-8">
        <div className="space-x-2 mb-4">
          <input
            type="text"
            placeholder="Search here"
            className="input input-bordered w-full max-w-xs"
            onChange={(e) => setSearchItems(e.target.value)}
          />
          <button onClick={handleSearch} className="btn btn-active">
            Search
          </button>
        </div>
        <table className="table table-zebra w-full">
          {/* head */}
          <thead>
            <tr>
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
            {allToy.slice(0, showAll ? 20 : 10).map((toys) => (
              <AllToysRow toys={toys} key={toys._id}></AllToysRow>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default AllToys;
