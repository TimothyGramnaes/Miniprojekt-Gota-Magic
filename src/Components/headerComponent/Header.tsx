import React, { useState } from "react";
import "./Header.css";
import Button from "@material-ui/core/Button";
import CustomizedBadges from "./styledBadge";
import TemporaryDrawer from "./Drawer";
import SimpleMenu from "./SimpleMenu";

function Header() {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <div className="header">
      <div className="menu-burger-icon">
        <SimpleMenu></SimpleMenu>
      </div>
      <div className="header-icon">
        <img
          style={{ width: "40px", height: "40px" }}
          src="../magic 1.png"
          alt=""
        />
        <h3>Göta Magic</h3>
      </div>
      <div className="menu-bar">
        <div className="menu-button">
          <Button>Produkter</Button>
        </div>
        <div className="menu-button">
          <Button>Om oss</Button>
        </div>
        <div className="menu-button">
          <Button>Kontakt</Button>
        </div>
        <div className="menu-button">
          <Button>Turneringar</Button>
        </div>
      </div>
      <div className="cartIcon" onClick={() => setIsOpen(!isOpen)}>
        <TemporaryDrawer></TemporaryDrawer>
      </div>
    </div>
  );
}

export default Header;
