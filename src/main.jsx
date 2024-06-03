import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import Home from './Components/Home/Home';
import Donation from './Components/Donation/Donation';
import DonationDetails from './Components/DonationDetails/DonationDetails';
import Statistics from './Components/Statistics/Statistics';
import AllDonation from './Components/AllDonation/AllDonation';
import MyDonationDetails from './Components/MyDonationDetails/MyDonationDetails';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/donation',
        loader:()=>fetch('/data.json'),
        element:<Donation/>
      },
      {
        path:'/donationDetail/:id',
        loader:()=>fetch('../data.json'),
        element:<DonationDetails/>
      },
      {
        path:'/my-donation/:id',
        loader:()=>fetch('../data.json'),
        element:<MyDonationDetails/>
      },
      {
        path:'/statistics',
        element:<Statistics/>
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
