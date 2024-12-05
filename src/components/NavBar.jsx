import React from "react";
import SearchBar from "./SearchBar";

const Navbar = ({ searchKeyword, onSearchChange }) => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1>NOTES</h1>
        <SearchBar
          searchKeyword={searchKeyword}
          onSearchChange={onSearchChange}
        />
      </div>
    </nav>
  );
};

export default Navbar;
