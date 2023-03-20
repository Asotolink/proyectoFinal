import { useParams } from 'react-router-dom';

function Footer() {
    const { id } = useParams();
    return (<div>
        <a href={"/terminos/" +id}><p className='copy'>© 2023 | Powered by Asotolink Tests | Términos y condiciones</p></a>
        <section className='rSocial'>
            <a href='https://es-es.facebook.com/'><img alt='Icono Facebook' src='/img/svg/facebook.svg'></img></a>
            <a href='https://twitter.com/?lang=es'><img alt='Icono Twitter' src='/img/svg/twitter.svg'></img></a>
            <a href='https://es.linkedin.com/'><img alt='Icono Linkedin' src='/img/svg/linkedin.svg'></img></a>
            <a href='https://www.instagram.com/'><img alt='Icono Instagram' src='/img/svg/instagram.svg'></img></a>


        </section>

</div>)

}export default Footer;