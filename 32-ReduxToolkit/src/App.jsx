import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import { ToastContainer} from 'react-toastify';
import { Provider } from "react-redux";  
import { store } from "./redux/store/Store"; 


function App() {

  const router=createBrowserRouter([
    {
      path:'/',
      element:<Layout/>,
      children:[
        {
          path:'/',
          element:<Home/>,
        },
        {
          path:'/about',
          element:<About/>,
        },
        {
          path:'/contact',
          element:<Contact/>,
        },
        {
          path:'/register',
          element:<Register/>,
        },
        {
          path:'/login',
          element:<Login/>,
        },
      ]
    }
  ])
  return <>
  <Provider store={store}>
  <RouterProvider router={router}/>
  <ToastContainer/>
  </Provider>
  </>;
}

export default App;
