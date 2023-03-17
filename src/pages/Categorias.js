import Footer from '../Componentes/Footer';
import Header from '../Componentes/Header';
import Navbar from '../Componentes/Navbar';

function Categorias() {
  return (
    <div className="categoriasContainer">
      <header>
        <Header></Header>
      </header>
      <main className='mainCategorias'>
        <section className="buscador">
          <img src="/img/svg/search.svg"></img>
          <div className="separacionBuscador"></div>
          <form className='formBusc' action="" method="post" target="_blank">

            <input className="inpBuscador" type="search" name="busquedamusica" placeholder="Ej: Videojuegos" />
          </form>
        </section>
        <section className='zonaCategorias'>
          <a href={'/test/' + "Videojuegos"} ><div className="f1 cat">
            <p className=' tituloCategoria'>Videojuegos</p>
          </div>
          </a>
          <a href={'/test/' + "Programación"}><div className="f2 cat">
            <p className=' tituloCategoria'>Programación</p>
          </div>
          </a>
          <a href={'/test/' + "Series y películas"}><div className="f3 cat">
            <p className=' tituloCategoria'>Series y películas</p>
          </div>
          </a>
          <a href={'/test/' + "Historia"}><div className="f4 cat">
            <p className=' tituloCategoria'>Historia</p>
          </div>
          </a>
          <a href={'/test/' + "Idiomas"}><div className="f5 cat">
            <p className=' tituloCategoria'>Idiomas</p>
          </div>
          </a>
          <a href={'/test/' + "Música"}><div className="f6 cat">
            <p className=' tituloCategoria'>Música</p>
          </div>
          </a>
        </section>
      </main>
      <Navbar></Navbar>
      <footer>
        <Footer></Footer>
      </footer>
    </div>

  );
} export default Categorias;