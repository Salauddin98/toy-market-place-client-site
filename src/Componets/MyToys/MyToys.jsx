import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import MyToysRow from "./MyToysRow";
import Swal from "sweetalert2";
import { useNavigation } from "react-router-dom";
import Loading from "../../Loading/Loading";
import useTitle from "../../Hooks/useTitle";

const MyToys = () => {
  useTitle("MyToys");
  const { user } = useContext(AuthContext);

  // console.log(user.email);
  const [myToys, setMyToys] = useState([]);
  const url = `http://localhost:5000/myToys?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMyToys(data);
      });
  }, [url]);

  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return <Loading></Loading>;
  }

  const handleDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/myJobs/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your Toys has been deleted.", "success");
              const remaining = myToys.filter((toys) => toys._id !== id);
              setMyToys(remaining);
            }
          });
      }
    });
  };

  return (
    <section>
      <div className="overflow-x-auto px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-10 lg:px-8">
        <table className="table table-zebra w-full">
          {/* head */}
          <thead>
            <tr>
              <th>Number</th>
              <th>Seller Name</th>
              <th>Toy Name</th>
              <th>Toy Category</th>
              <th>Available Quantity</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {myToys.map((toys, index) => (
              <MyToysRow
                handleDelete={handleDelete}
                toys={toys}
                key={toys._id}
                index={index}
              ></MyToysRow>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default MyToys;
