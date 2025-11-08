import { createBrowserRouter } from "react-router";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Components/Home";
import ErrorPage from "../Components/ErrorPage";
import AllProducts from "../Components/AllProducts";
import MyExports from "../Components/MyExports";
import MyImports from "../Components/MyImports";
import AddExport from "../Components/AddExport";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
    Component: MainLayouts,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/allProducts",
        element: <AllProducts></AllProducts>,
      },
      {
        path: "/myExports",
        element: <MyExports></MyExports>,
      },
      {
        path: "/myImports",
        element: <MyImports></MyImports>,
      },
      {
        path: "/addExport",
        element: <AddExport></AddExport>,
      },
    ],
  },
]);

export default router;
