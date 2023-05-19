import { useLoaderData, useNavigation } from "react-router-dom";
import AllToysRow from "./AllToysRow";
import Loading from "../../Loading/Loading";

const AllToys = () => {
  const allToys = useLoaderData();
  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return <Loading></Loading>;
  }
  return (
    <section>
      <div className="overflow-x-auto px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-10 lg:px-8">
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
            {allToys.map((toys) => (
              <AllToysRow toys={toys} key={toys._id}></AllToysRow>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default AllToys;
