import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import Categorias from './pages/Categorias';
import Perfil from './pages/Perfil';
import Test from './pages/Test';
import Registro from './pages/Registro';
import Login from './pages/Login';
import Terminos from './pages/Terminos';
const browserRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },{
    path: '/:id',
    element: <App />
  },{
    path: '/categorias/:id',
    element: <Categorias />
  },{
    path: '/categorias',
    element: <Categorias />
  },{
    path: '/perfil' ,
    element: <Perfil />
  },{
    path: '/test/:categoria/:id',
    element: <Test />
  },{
    path: '/registro',
    element: <Registro />
  },{
    path: '/login',
    element: <Login />
  },{
    path: '/terminos/:id',
    element: <Terminos />
  }
  
  
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={browserRouter} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
