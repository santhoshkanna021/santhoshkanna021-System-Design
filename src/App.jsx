import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "./pages/MainPage.jsx";
import AddUserPage from "./pages/AddUserPage.jsx";

const router = createBrowserRouter([
  {
    path: "/", // Main page
    element: <MainPage />,
  },
  {
    path: "/add-user", // Add user page
    element: <AddUserPage />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
