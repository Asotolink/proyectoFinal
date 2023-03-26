function Header() {

    return (
        <picture className="picHeader">
          <source media="(min-width: 601px)"
            srcSet="
        /img/bannerEsc.webp 1x,
        /img/bannerEsc@2x.webp 2x,
        /img/bannerEsc@3x.webp 3x"
          />
          <source media="(max-width: 600px)"
            srcSet="
        /img/header.webp 1x,
        /img/header@2x.webp 2x,
        /img/header@3x.webp 3x"
          />

          <img className="imgHeader" src="" alt="Header-Banner" />
        </picture>
)

}export default Header;