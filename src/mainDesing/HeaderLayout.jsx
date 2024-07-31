import React, { useState } from "react";
import logo from "../assets/logo.png";
import magic from "../assets/magic_img.png";
import PopupComponent from "./PopupComponent";

function HeaderLayout() {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <>
      <header className="header_component w-full h-auto max-h-24 flex flex-row justify-between align-middle p-4 bg-#fff box shadow-lg shadow-black-500/40 bg-white md:px-[10vw] md:w-full ">
        <div className="header_logo w-40">
          <img className="w-40" src={logo} alt="logo" />
        </div>
        <div className="magic_signup max-w-14 w-10 h-auto max-h-16 overflow-hidden md:hidden ">
          <button className="magic_signup_btn " onClick={togglePopup}>
            <img
              className="magic_signup_img w-full overflow-hidden bg-cover"
              src={magic}
              alt="magic signup"
            />
          </button>
        </div>
        {showPopup && (
          <div
            className="popup_container w-3/5 max-w-64 overflow-auto absolute top-24 right-3 bg-white
           pt-4 pr-2 pb-4 pl-2 rounded-lg md:hidden"
          >
            <PopupComponent onClose={togglePopup} />
          </div>
        )}
      </header>
    </>
  );
}

export default HeaderLayout;
