function Navbar(props) {
    const { id } = props;
    return (

        <nav className='navbar'>
            <a href={id ? ('/' + id) : ('/')}><img alt="Icono Home" src='/img/svg/home.svg'></img></a>
            <a href={id ? ('/categorias/' + id) : ('/categorias')}><img alt="Icono Lupa" src='/img/svg/search.svg'></img></a>
            <a href='/perfil'><img className="iconoPerfil" alt="Icono Perfil" src='/img/svg/person.svg'></img></a>
        </nav>

    )

} export default Navbar;