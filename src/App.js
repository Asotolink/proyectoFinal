import './App.css';
import Footer from './Componentes/Footer';
import Navbar from './Componentes/Navbar';

function App() {
  return (
    <div className="container">
      <header className="header">
        <picture>
          <source
            srcSet="
        /img/header-banner.webp 1x,
        /img/header-banner@2x.webp 2x,
        /img/header-banner@3x.webp 3x"
          />

          <img src="" alt="Header-Banner" />
        </picture>
      </header>
      <main className='mainIndex'>
        <p className='descripcionIndex texto'>Realiza tests de los temas que te interesen y consigue tantos puntos como puedas. ¡Enséñale a tus amigos y al mundo entero tus logros y tu nivel!</p>
        <a href='/login' className='boton'><p>Inicia Sesión</p></a>
        <br></br>
        <a href='/registro' className='boton'><p>Regístrate</p></a>

        <h4>Tutorial Básico</h4>
        <p className='texto'>Escoge una categoría.</p>
        <picture>
          <source
            srcSet="
        /img/header-banner.webp 1x,
        /img/header-banner@2x.webp 2x,
        /img/header-banner@3x.webp 3x"

          />
          <img className='foto1C' src="" alt="Escoge una categoría" />
        </picture>
      </main>
      <Navbar></Navbar>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
}

export default App;
