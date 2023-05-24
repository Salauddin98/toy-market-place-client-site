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
  const [searchResults, setSearchResults] = useState([]);

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
  const handleEnterSearch = (event) => {
    if (event.key === "Enter") {
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
    }
  };

  const handleSearchNew = (event) => {
    const value = event.target.value;
    setSearchItems(value);

    // Perform search logic here
    const results = performSearch(value); // Replace with your own search function
    setSearchResults(results);
  };

  const performSearch = (query) => {
    fetch(
      `https://toys-server-site-salauddin98.vercel.app/getToysByText/${query}`,
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
    return []; // Replace with your own search implementation
  };

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
      <div className="space-x-2 mb-4 mt-4">
        <input
          type="text"
          placeholder="Search By Toy Name"
          className="input input-bordered w-full max-w-xs"
          // onChange={(e) => setSearchItems(e.target.value)}
          onKeyDown={handleEnterSearch}
          onChange={handleSearchNew}
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
              <th>Quantity</th>
              <th>Price</th>
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
            {/* {allToy.map((toys, index) => (
              <AllToysRow index={index} toys={toys} key={toys._id}></AllToysRow>
            ))} */}
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
