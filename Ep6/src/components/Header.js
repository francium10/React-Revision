/** @format */
import { LOGO_URL } from "../utils/constant";
const Header = () => {
  return (
    <div className="Header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>

      <div className="nav-list">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Cart</li>
          <li>SignIn</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
