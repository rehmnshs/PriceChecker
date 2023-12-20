import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import App from './App';
import Productpage from './pages/Productpage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: ":term/productpage",
    element: <Productpage />,
  },
  {
    path: ":productv/productdetes"
  }

]);

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);

root.render(<RouterProvider router={router} />);

