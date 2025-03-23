import React, { useState } from "react";
import "./header.css";
import { IoSearch } from "react-icons/io5";
import { getWeatherData } from "../Api";

const Header = ({ setWeatherData }) => {
  const [search, setSearch] = useState("");

  const handleSearch = () => {
    getWeatherData(search, setWeatherData);
    setSearch("");
  };

  return (
    <div className="headerWrapper">
      <div className="inputhold">
        <IoSearch size={20} style={{ margin: 5 , cursor: "pointer"}} onClick={handleSearch} />
        <input
          type="text"
          placeholder="Enter a City"
          className="myinput"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Header;