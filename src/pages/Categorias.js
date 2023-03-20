import Footer from '../Componentes/Footer';
import Header from '../Componentes/Header';
import Navbar from '../Componentes/Navbar';
import { useParams } from 'react-router-dom';

function Categorias() {
  const { id } = useParams();
  return (


    <div className="categoriasContainer">
      <div className='cabeceraCategorias'>
      <header>
        <Header></Header>
      </header>
      <Navbar id={id}></Navbar>
      </div>

      <main className='mainCategorias'>
        <h5 className='tituloCategorias'>CATEGORIAS</h5>
        {id ? (
          <section className='zonaCategorias'>
            <a href={'/test/' + "Videojuegos/" + id} >
              <div className="f1 cat">
                <p className=' tituloCategoria'>Videojuegos</p>
              </div>
            </a>
            <a href={'/test/' + "Programación/" + id}>
              <div className="f2 cat">
                <p className=' tituloCategoria'>Programación</p>
              </div>
            </a>
            <a href={'/test/' + "Series y películas/" + id}>
              <div className="f3 cat">
                <p className=' tituloCategoria'>Series y películas</p>
              </div>
            </a>
            <a href={'/test/' + "Historia/" + id}>
              <div className="f4 cat">
                <p className=' tituloCategoria'>Historia</p>
              </div>
            </a>
            <a href={'/test/' + "Idiomas/" + id}>
              <div className="f5 cat">
                <p className=' tituloCategoria'>Idiomas</p>
              </div>
            </a>
            <a href={'/test/' + "Música/" + id}>
              <div className="f6 cat">
                <p className=' tituloCategoria'>Música</p>
              </div>
            </a>

          </section>
        ) : (
            <section className='zonaCategorias'>
              <a href='/login' >
                <div className="f1 cat">
                  <p className=' tituloCategoria'>Videojuegos</p>
                </div>
              </a>
              <a href='/login'>
                <div className="f2 cat">
                  <p className=' tituloCategoria'>Programación</p>
                </div>
              </a>
              <a href='/login'>
                <div className="f3 cat">
                  <p className=' tituloCategoria'>Series y películas</p>
                </div>
              </a>
              <a href='/login'>
                <div className="f4 cat">
                  <p className=' tituloCategoria'>Historia</p>
                </div>
              </a>
              <a href='/login'>
                <div className="f5 cat">
                  <p className=' tituloCategoria'>Idiomas</p>
                </div>
              </a>
              <a href='/login'>
                <div className="f6 cat">
                  <p className=' tituloCategoria'>Música</p>
                </div>
              </a>
            </section>
        )}
      </main>
      
      <footer>
        <Footer id={id}></Footer>
      </footer>
      
    </div>


  );
}

export default Categorias;