import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Layout';
import Home from './Component/Home/Home';
import Contact from './Component/Contact';
import About from './Component/About/About';
import Github from './Component/Github';
import Movies from './Component/Movies/Movies';
import Country from './Component/Country/Country';
import Products from './Component/Products/Products';
import Productsbazaar from './Component/Productsbazaar/Productsbazaar';



const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout></Layout>,
    children: [
      {path:"" , element:<Home />},
      {path:"About" , element:<About />},
      {path:"Contact" , element:<Contact />},
      {path:"Movies" , element:<Movies />},
      {path:"Github" , element:<Github />},
      {path:"Country" , element:<Country />},
      {path:"Products" , element:<Products />},
      {path:"Productsbazaar" , element:<Productsbazaar />},
      
    ]
  }
]);





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
