import * as React from "react";
import "./style.scss";
import Nav from "../nav";
import links from "./links";

export interface Link {
  text: string;
  link: string;
  target?: string;
};

class Header extends React.Component<{}, {}> {

  render() {
    const logo = require("./logo.svg");
    return (
      <div id="header">
        <img src={logo} className="logo" alt="logo" />
        <h2>React template Pre-packed with...</h2>
        <Nav links={links}/>
      </div>
    );
  }
}

export default Header;
