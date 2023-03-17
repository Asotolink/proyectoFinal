import Footer from '../Componentes/Footer';
import Header from '../Componentes/Header';
import Navbar from '../Componentes/Navbar';

function Dificultad() {
    var dificultad = "";
    return (
        <div className="categoriasContainer">
            <header>
                <Header></Header>
            </header>
            <main className="mainDificultad">
                <section className='dificultad'>
                    <h4 className='tituloDificultad'>DIFICULTAD</h4>
                    <div className='separacionDificultad'></div>
                </section>
                <section className='botonesDif'>
                    
                    <a href='/test' className='boton btnDif'><p>FÁCIL</p></a>
                    <br></br>
                    <a href='/test' className='boton btnDif'><p>MEDIO</p></a>
                    <br></br>
                    <a href='/test' className='boton btnDif'><p>DIFÍCIL</p></a>
                </section>
            </main>
            <Navbar></Navbar>
            <footer>
                <Footer></Footer>
            </footer>
        </div>

    );
} export default Dificultad;