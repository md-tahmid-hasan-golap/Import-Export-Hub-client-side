import React, { useContext, useEffect, useState } from "react";
import { useLoaderData, Link } from "react-router-dom";
import { AuthContext } from "../firebase/FirebaseAuthProvider";
import Swal from "sweetalert2";
import axios from "axios";

const MyImports = () => {
  const { user } = useContext(AuthContext);
  const loaderData = useLoaderData();
  const [imports, setImports] = useState([]);

  useEffect(() => {
    if (user) {
      const userImports = loaderData.filter(
        (item) => item.email === user.email
      );
      setImports(userImports);
    }
  }, [user, loaderData]);

  const handeldelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This action cannot be undone!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`http://localhost:5000/import-delete/${_id}`)
          .then((res) => {
            if (res.data.deletedCount) {
              setImports((prevImports) =>
                prevImports.filter((item) => item._id !== _id)
              );

              Swal.fire({
                title: "Deleted!",
                text: "Product removed successfully.",
                icon: "success",
              });
            }
          })
          .catch((error) => console.log(error));
      }
    });
  };

  return (
    <div className="max-w-7xl mx-auto my-10 px-4">
      <h2
        className="
        text-2xl 
        sm:text-3xl 
        md:text-4xl 
        lg:text-5xl 
        font-bold 
        mb-8 
        text-center 
        bg-gradient-to-r 
        from-purple-500 
        via-pink-500 
        to-red-500 
        bg-clip-text 
        text-transparent
        "
      >
        My Imports
      </h2>

      {imports.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">
          You have no imported products yet.
        </p>
      ) : (
        <div className="overflow-x-auto shadow-lg rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white">
              <tr>
                <th className="py-3 px-2 sm:px-4 text-left text-xs sm:text-sm">
                  Image
                </th>
                <th className="py-3 px-2 sm:px-4 text-left text-xs sm:text-sm">
                  Name
                </th>
                <th className="py-3 px-2 sm:px-4 text-left text-xs sm:text-sm">
                  Price
                </th>
                <th className="py-3 px-2 sm:px-4 text-left text-xs sm:text-sm">
                  Rating
                </th>
                <th className="py-3 px-2 sm:px-4 text-left text-xs sm:text-sm">
                  Origin
                </th>
                <th className="py-3 px-2 sm:px-4 text-left text-xs sm:text-sm">
                  Quantity
                </th>
                <th className="py-3 px-2 sm:px-4 text-left text-xs sm:text-sm">
                  Remove
                </th>
                <th className="py-3 px-2 sm:px-4 text-left text-xs sm:text-sm">
                  Details
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {imports.map((item) => (
                <tr
                  key={item._id}
                  className="hover:bg-purple-50 transition duration-200"
                >
                  <td className="py-2 px-2 sm:px-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-12 sm:h-16 w-12 sm:w-16 object-cover rounded-lg shadow-sm"
                    />
                  </td>
                  <td className="py-2 px-2 sm:px-4 font-medium text-sm sm:text-base">
                    {item.name}
                  </td>
                  <td className="py-2 px-2 sm:px-4 text-gray-700 text-sm sm:text-base">
                    ${item.price}
                  </td>
                  <td className="py-2 px-2 sm:px-4 text-yellow-500 font-semibold text-sm sm:text-base">
                    {item.rating} ⭐
                  </td>
                  <td className="py-2 px-2 sm:px-4 text-sm sm:text-base">
                    {item.origin}
                  </td>
                  <td className="py-2 px-2 sm:px-4 font-semibold text-sm sm:text-base">
                    {item.importedQty}
                  </td>
                  <td className="py-2 px-2 sm:px-4">
                    <button
                      onClick={() => handeldelete(item._id)}
                      className="py-1 px-2 sm:px-3 bg-red-500 text-white rounded-lg shadow hover:bg-red-600 transition text-xs sm:text-sm"
                    >
                      Remove
                    </button>
                  </td>
                  <td className="py-2 px-2 sm:px-4">
                    <Link
                      to={`/productDetails/${item.productId}`}
                      className="py-1 sm:py-2 px-2 sm:px-5 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white font-semibold rounded-lg shadow-lg hover:from-pink-500 hover:to-red-500 transition flex items-center gap-1 sm:gap-2 text-xs sm:text-sm justify-center"
                    >
                      See Details →
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyImports;
