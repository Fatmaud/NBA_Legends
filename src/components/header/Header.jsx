import "./Header.scss";
import logo from "../../assets/nba-logo-transparent.png";

const Header = () => {
  return (
    <div className="header-container">
      <header>
        <img src={logo} alt="" />
        <h1>NBA Legends</h1>
      </header>
    </div>
  );
};

export default Header;
