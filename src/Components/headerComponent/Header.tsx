import React from "react";
import "./Header.css";
import Button from "@material-ui/core/Button";
import ShoppingCart from "@material-ui/icons/ShoppingCart";

const Header = () => {
  return (
    <div className="header">
      <div className="header-icon">
        <img
          style={{ width: "50px", height: "50px" }}
          src="../magic 1.png"
          alt=""
        />
        <h2>Göta Magic</h2>
      </div>
      <Button>Secondary</Button>
      <Button>Secondary</Button>
      <Button>Secondary</Button>
      <Button>Secondary</Button>
      <ShoppingCart fontSize="large"></ShoppingCart>
    </div>
  );
};
export default Header;
