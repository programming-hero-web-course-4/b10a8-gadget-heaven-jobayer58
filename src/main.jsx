import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Root from './components/Root/Root';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Home from './components/Home/Home';
import Statistic from './components/Statistic/Statistic';
import Dashboard from './components/Dashboard/Dashboard';
import ProductDetails from './components/ProductDetails/ProductDetails';
import Cart from './components/Cart/Cart';
import Wishlist from './components/Wishlist/Wishlist';
import { ToastContainer } from 'react-toastify';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path:'statistic',
        element: <Statistic></Statistic>
      },
      {
        path: 'dashboard',
        element: <Dashboard></Dashboard>,
        children: [
          {
            path: 'cart',
            element: <Cart></Cart>,
            loader: () => fetch('/gadgetData.json')
          },
          {
            path: 'wishList',
            element: <Wishlist></Wishlist>,
            loader: () => fetch('/gadgetData.json')
          }
        ]
      },
      {
        path: 'productDetails/:product_id',
        element: <ProductDetails></ProductDetails>,
        loader: () => fetch('/gadgetData.json')
      },
      
    ]
    
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </StrictMode>,
)
