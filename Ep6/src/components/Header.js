/** @format */
import { LOGO_URL } from "../utils/constant";
import { useState } from "react";

const Header = () => {
  const [loginButton, setLoginButton] = useState("Login");

  return (
    <div className="flex justify-between shadow-l bg-pink-400 h-24">
      <div className="logo-container w-40">
        <img className="w-40 h-24" src={LOGO_URL} />
      </div>

      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">Home</li>
          <li className="px-4">About Us</li>
          <li className="px-4">Contact Us</li>
          <li className="px-4">Cart</li>

          <button
            className="login-btn"
            onClick={() => {
              loginButton === "login"
                ? setLoginButton("logout")
                : setLoginButton("login");
            }}>
            {loginButton}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
