import React, { useState } from "react";
import "./Header.css";
import Button from "@material-ui/core/Button";
import CustomizedBadges from "./styledBadge";
import TemporaryDrawer from "./Drawer";

function Header() {
  let [isOpen, setIsOpen] = useState(false);

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
      <div className="cartIcon" onClick={() => setIsOpen(!isOpen)}>
        {/* <CustomizedBadges></CustomizedBadges> */}
      </div>
      <TemporaryDrawer></TemporaryDrawer>
    </div>
  );
}

export default Header;
