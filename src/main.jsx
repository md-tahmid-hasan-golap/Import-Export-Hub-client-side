import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider } from "react-router";
import router from "./Router/Router.jsx";
import FirebaseAuthProvider from "./firebase/FirebaseAuthProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FirebaseAuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </FirebaseAuthProvider>
  </StrictMode>
);
