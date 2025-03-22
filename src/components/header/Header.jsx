import React from "react";
import "./header.css";
import { IoLanguageSharp } from "react-icons/io5";
import { RiSunLine } from "react-icons/ri";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { IoNotificationsOutline } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";

const Header = () => {
  return (
    <div className="headerWrapper">
      <div className="inputhold">
        <IoSearch size={20} style={{ margin: 5 }} />
        <input
          type="text"
          placeholder="Search [CTRL + K]"
          className="myinput"
        />
      </div>
    </div>
  );
};

export default Header;
