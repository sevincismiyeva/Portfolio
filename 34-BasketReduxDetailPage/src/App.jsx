import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import { ToastContainer } from "react-toastify";
import Wishlist from "./pages/Wishlist";
import Basket from "./pages/basket/Basket";
import ProductDetail from "./pages/detailproduct/ProductDetail";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/wishlist",
          element: <Wishlist />,
        },
        {
          path: "/basket",
          element: <Basket/>,
        },
        {
          path: "/productdetail/:id",
          element: <ProductDetail/>,
        },
      ],
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer />
    </>
  );
}

export default App;
