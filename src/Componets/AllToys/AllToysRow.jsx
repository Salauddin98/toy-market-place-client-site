const AllToysRow = ({ toys }) => {
  return (
    <tr>
      <td>{toys.sellerName}</td>
      <td>{toys.name}</td>
      <td>{toys.subCategory}</td>
      <td>{toys.quantity}</td>
      <td>
        <button className="btn btn-outline">View Details</button>
      </td>
    </tr>
  );
};

export default AllToysRow;
