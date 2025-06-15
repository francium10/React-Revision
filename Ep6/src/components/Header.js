/** @format */
import { LOGO_URL } from "../utils/constant";
import { useState } from "react";

const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Login");

  return (
    <div className="flex justify-between shadow-l  h-24">
      <div className="logo-container ">
        <img className="w-40 h-24" src={LOGO_URL} />
      </div>

      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">Home</li>
          <li className="px-4">About Us</li>
          <li className="px-4">Contact Us</li>
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
