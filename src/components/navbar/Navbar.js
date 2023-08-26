import { RxHamburgerMenu } from "react-icons/rx";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="row">
        <RxHamburgerMenu fontSize={20} color="white" />
        <h1 className="logo-name">NFTify</h1>
      </div>
      <button type="button" className="connect-button">
        Connect
      </button>
    </nav>
  );
};

export default Navbar;
