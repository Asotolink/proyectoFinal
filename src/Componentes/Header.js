function Header() {

    return (
        <picture>
          <source
            srcSet="
        /img/header.webp 1x,
        /img/header@2x.webp 2x,
        /img/header@3x.webp 3x"
          />

          <img src="" alt="Header-Banner" />
        </picture>
)

}export default Header;