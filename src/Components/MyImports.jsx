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

  const handleDelete = (_id) => {
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
          .delete(
            `https://import-export-hub-server-side.vercel.app/import-delete/${_id}`
          )
          .then((res) => {
            if (res.data.deletedCount) {
              setImports((prev) => prev.filter((item) => item._id !== _id));
              Swal.fire({
                title: "Deleted!",
                text: "Product removed successfully.",
                icon: "success",
              });
            }
          })
          .catch(() => {
            Swal.fire({
              title: "Failed!",
              text: "Could not delete the item.",
              icon: "error",
            });
          });
      }
    });
  };

  return (
    <div className="max-w-7xl mx-auto my-10 px-4">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-center bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
        My Imports
      </h2>

      {imports.length === 0 ? (
        <p className="text-center text-gray-600 dark:text-gray-300 text-lg">
          You have no imported products yet.
        </p>
      ) : (
        <div className="overflow-x-auto shadow-lg rounded-lg border border-gray-200 dark:border-gray-700">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-100 dark:bg-gray-800">
              <tr>
                {[
                  "Image",
                  "Name",
                  "Price",
                  "Rating",
                  "Origin",
                  "Quantity",
                  "Remove",
                  "Details",
                ].map((header) => (
                  <th
                    key={header}
                    className="py-3 px-2 sm:px-4 text-left text-xs sm:text-sm text-gray-700 dark:text-gray-200"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
              {imports.map((item) => (
                <tr
                  key={item._id}
                  className="hover:bg-purple-50 dark:hover:bg-gray-700 transition duration-200"
                >
                  {/* Image */}
                  <td className="py-2 px-2 sm:px-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-12 sm:h-16 w-12 sm:w-16 object-cover rounded-lg shadow-sm"
                    />
                  </td>

                  {/* Name */}
                  <td className="py-2 px-2 sm:px-4 font-medium text-sm sm:text-base text-gray-800 dark:text-gray-100">
                    {item.name}
                  </td>

                  {/* Price */}
                  <td className="py-2 px-2 sm:px-4 text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                    ${item.price}
                  </td>

                  {/* Rating */}
                  <td className="py-2 px-2 sm:px-4 text-yellow-500 font-semibold text-sm sm:text-base">
                    {item.rating} ⭐
                  </td>

                  {/* Origin */}
                  <td className="py-2 px-2 sm:px-4 text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                    {item.origin || "Unknown"}
                  </td>

                  {/* Quantity */}
                  <td className="py-2 px-2 sm:px-4 text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                    {item.quantity || ""}
                  </td>

                  {/* Remove Button */}
                  <td className="py-2 px-2 sm:px-4">
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="py-1 px-2 sm:px-3 bg-red-500 text-white rounded-lg shadow hover:bg-red-600 transition text-xs sm:text-sm"
                    >
                      Remove
                    </button>
                  </td>

                  {/* Details Button */}
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
