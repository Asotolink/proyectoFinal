import Footer from '../Componentes/Footer';
import Header from '../Componentes/Header';
import Navbar from '../Componentes/Navbar';

function Dificultad() {
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
                    <button className='boton btnDif'>FÁCIL</button>
                    <br></br>
                    <button className='boton btnDif'>MEDIO</button>
                    <br></br>
                    <button className='boton btnDif'>DIFÍCIL</button>
                </section>
            </main>
            <Navbar></Navbar>
            <footer>
                <Footer></Footer>
            </footer>
        </div>

    );
} export default Dificultad;