import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import Categorias from './pages/Categorias';
import Perfil from './pages/Perfil';
import Dificultad from './pages/Dificultad';
import Test from './pages/Test';
const browserRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },{
    path: '/categorias',
    element: <Categorias />
  },{
    path: '/perfil',
    element: <Perfil />
  },{
    path: '/dificultad',
    element: <Dificultad />
  },{
    path: '/test',
    element: <Test />
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
