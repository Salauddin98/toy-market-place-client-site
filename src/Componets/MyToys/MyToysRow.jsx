import { Link, useNavigation } from "react-router-dom";
import Loading from "../../Loading/Loading";

const MyToysRow = ({ toys, handleDelete, index }) => {
  console.log(toys._id);
  const { _id } = toys;
  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return <Loading></Loading>;
  }
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{toys.sellerName}</td>
      <td>{toys.name}</td>
      <td>{toys.subCategory}</td>
      <td>{toys.quantity}</td>
      <td>${toys.price}</td>
      <td>
        {/* The button to open modal */}
        {/* <label htmlFor="my-modal-5" className="btn">
          Update
        </label> */}

        {/* Put this part before </body> tag */}
        {/* <input type="checkbox" id="my-modal-5" className="modal-toggle" /> */}
        {/* <div className="modal">
          <div className="modal-box w-11/12 max-w-5xl">
            <div className="modal-action">
              <label
                htmlFor="my-modal-5"
                aria-label="Close Menu"
                title="Close Menu"
                className="btn"
              >
                <svg
                  className="w-5 text-gray-200 font-bold"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                  />
                </svg>
              </label>
            </div>
            <UpdateToys toys={toys} handleUpdate={handleUpdate}></UpdateToys>
          </div>
        </div> */}
        <Link to={`/updateToys/${_id}`}>
          <button className="btn btn-outline btn-primary">Update</button>
        </Link>
      </td>
      <td>
        <button
          className="btn btn-outline btn-error"
          onClick={() => handleDelete(toys._id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default MyToysRow;
