import Footer from '../Componentes/Footer';
import Header from '../Componentes/Header';
import Navbar from '../Componentes/Navbar';
import { useParams } from 'react-router-dom';

function Terminos() {
    const { id } = useParams();
    return (
        <div className="terminosContainer">
            <div>
                <header>
                    <Header></Header>
                </header>
                <Navbar id={id}></Navbar>
            </div>
            <main className="mainTerminos">
                <h4>Términos y condiciones</h4>

                <p>Al utilizar esta página web, usted acepta los siguientes términos y condiciones:</p>

                <ol className='olTerm'>
                    <li>Esta página web está diseñada para ofrecer pruebas de conocimientos y no debe utilizarse con fines de diagnóstico o tratamiento médico.</li>
                    <li>Para utilizar esta página, es necesario crear una cuenta de usuario con un nombre de usuario y una contraseña. Usted es responsable de mantener la confidencialidad de su información de inicio de sesión y es responsable de todas las actividades que ocurran en su cuenta.</li>
                    <li>El uso de esta página web es gratuito, pero nos reservamos el derecho de cambiar o cancelar el servicio en cualquier momento.</li>
                    <li>Todas las pruebas y contenido en esta página web son propiedad exclusiva de los respectivos autores y están protegidos por derechos de autor y otras leyes de propiedad intelectual. No está permitido copiar, reproducir, distribuir o utilizar de cualquier otro modo el contenido sin permiso expreso.</li>
                    <li>Esta página web se proporciona "tal cual" sin garantía de ningún tipo, ya sea expresa o implícita. No somos responsables de cualquier pérdida o daño resultante del uso de esta página web.</li>
                </ol>

                <p>Al hacer clic en "Aceptar", usted acepta estos términos y condiciones y podrá utilizar esta página web.</p>


            </main>

            <footer>
                <Footer></Footer>
            </footer>
        </div>

    );
} export default Terminos;