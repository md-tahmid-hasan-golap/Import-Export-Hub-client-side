import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../firebase/FirebaseAuthProvider";
import MyAddedProducts from "./MyAddedProducts";

const MyExports = () => {
  const { user } = useContext(AuthContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(
      `https://import-export-hub-server-side.vercel.app/myProducts/${user.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, [user.email]);

  const handleLocalDelete = (id) => {
    setProducts((prevProducts) =>
      prevProducts.filter((item) => item._id !== id)
    );
  };

  return (
    <div className="mt-7 mb-5">
      <h2
        className="
        text-3xl 
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
        My Added Products
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {products.map((product, index) => (
          <MyAddedProducts
            key={product._id}
            products={product}
            index={index}
            onDelete={handleLocalDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default MyExports;
