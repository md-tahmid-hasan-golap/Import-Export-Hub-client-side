import { createBrowserRouter } from "react-router";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Components/Home";
import ErrorPage from "../Components/ErrorPage";
import AllProducts from "../Components/AllProducts";
import MyExports from "../Components/MyExports";
import MyImports from "../Components/MyImports";
import AddExport from "../Components/AddExport";
import Login from "../Components/Login";
import Register from "../Components/Register";
import ProductDetails from "../Components/ProductDetails";
import PrivateRouter from "./PrivateRouter";
import UpdateProducts from "../Components/UpdateProducts";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
    Component: MainLayouts,
    children: [
      {
        index: true,
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/letestProduct"),
      },
      {
        path: "/allProducts",
        element: <AllProducts></AllProducts>,
        loader: () => fetch("http://localhost:5000/allProducts"),
      },
      {
        path: "/myExports",
        element: (
          <PrivateRouter>
            <MyExports></MyExports>
          </PrivateRouter>
        ),
      },
      {
        path: "/myImports",
        element: (
          <PrivateRouter>
            <MyImports></MyImports>
          </PrivateRouter>
        ),
      },
      {
        path: "/addExport",
        element: (
          <PrivateRouter>
            <AddExport></AddExport>
          </PrivateRouter>
        ),
      },
      {
        path: "productDetails/:id",
        element: (
          <PrivateRouter>
            <ProductDetails></ProductDetails>
          </PrivateRouter>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/products-details/${params.id}`),
      },
      {
        path: "updateProducts/:id",
        element: (
          <PrivateRouter>
            <UpdateProducts></UpdateProducts>
          </PrivateRouter>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/products-details/${params.id}`),
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
    ],
  },
]);

export default router;
