import darkDesktopBackground from "../assets/bg-desktop-dark.jpg";
import darkMobileBackground from "../assets/bg-mobile-dark.jpg";
import lightDesktopBackground from "../assets/bg-desktop-light.jpg";
import lightMobileBackground from "../assets/bg-mobile-light.jpg";
import moon from "../assets/icon-moon.svg";
import sun from "../assets/icon-sun.svg";

function Header({ theme, toggleTheme }) {
  const darkImage = {
    desktop: darkDesktopBackground,
    mobile: darkMobileBackground,
  };
  const lightImage = {
    desktop: lightDesktopBackground,
    mobile: lightMobileBackground,
  };

  const Background = theme === "dark" ? darkImage : lightImage;
  const themeImage = theme === "dark" ? sun : moon;

  return (
    <header>
      <picture className="background-image">
        <source srcSet={Background.desktop} media="(min-width: 768px)" />
        <img src={Background.mobile} alt="Background" />
      </picture>
      <div className="content header">
        <h1>TODO</h1>
        <div className="pointer" onClick={toggleTheme}>
          <img src={themeImage} alt="change theme" />
        </div>
      </div>
    </header>
  );
}

export default Header;
