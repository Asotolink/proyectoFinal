import './App.css';
import Footer from './Componentes/Footer';
import Navbar from './Componentes/Navbar';
import { useParams } from 'react-router-dom';

function App() {
  const { id } = useParams();
  return (

    <div className="container">
<div className='cabeceraApp'>
      <header>
        <picture className='picApp'>
          <source
            srcSet="
        /img/header-banner.webp 1x,
        /img/header-banner@2x.webp 2x,
        /img/header-banner@3x.webp 3x"
          />

          <img src="" alt="Header-Banner" />
        </picture>
      </header>
      <Navbar id={id}></Navbar>
      </div>
      <main className='mainIndex'>
        <p className='descripcionIndex texto'>Realiza tests de los temas que te interesen y consigue tantos puntos como puedas. ¡Enséñale a tus amigos y al mundo entero tus logros y tu nivel!</p>
        
        {id ? (
          <a href='/perfil' className='boton'>
            <p>Accede a tu perfil</p>
          </a>

        ) : (
          <div>
            <a href='/login' className='boton'>
              <p>Inicia sesión</p>
            </a>
            <br></br>
            <a href='/registro' className='boton'>
              <p>Regístrate</p>
            </a></div>
        )}


        {/* <h4>Tutorial Básico</h4>
        <p className='texto'>Escoge una categoría.</p>
        <picture>
          <source
            srcSet="
        /img/header-banner.webp 1x,
        /img/header-banner@2x.webp 2x,
        /img/header-banner@3x.webp 3x"

          />
          <img className='foto1C' src="" alt="Escoge una categoría" />
        </picture> */}
      </main>
      
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
}

export default App;
