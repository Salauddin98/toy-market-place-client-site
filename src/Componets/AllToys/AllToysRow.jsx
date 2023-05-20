import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";
import { toast } from "react-hot-toast";

const AllToysRow = ({ toys }) => {
  const { user } = useContext(AuthContext);
  const handleCheck = () => {
    if (!user) {
      toast.error("You have to log in first to view details");
    }
  };
  return (
    <tr>
      <td>{toys.sellerName}</td>
      <td>{toys.name}</td>
      <td>{toys.subCategory}</td>
      <td>{toys.quantity}</td>
      <td>
        <Link to={`/viewDetails/${toys._id}`}>
          <button onClick={handleCheck} className="btn btn-outline">
            View Details
          </button>
        </Link>
      </td>
    </tr>
  );
};

export default AllToysRow;
