/** @format */
import { LOGO_URL } from "../utils/constant";
import { useState, useEffect } from "react";
import { Link } from "react-router";

const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Login");
  console.log("Header component rendered");

  useEffect(() => {
    console.log("useEffect is called");
  }, []);

  return (
    <div className="flex justify-between shadow-l  h-24">
      <div className="logo-container ">
        <img className="w-40 h-24" src={LOGO_URL} />
      </div>

      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="px-4">
            <Link to={"/about"}>About Us</Link>
          </li>
          <li className="px-4">
            <Link to={"/contact"}>Contact Us</Link>
          </li>
          <li className="px-4">Cart</li>
          <button
            className="login-button px-4  bg-green-100 "
            onClick={() => {
              loginBtn === "Login"
                ? setLoginBtn("Logout")
                : setLoginBtn("Login");
            }}>
            {loginBtn}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
