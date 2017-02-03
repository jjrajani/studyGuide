import * as React from "react";
import "./style.scss";
import { ILink } from "./link";

class Nav extends React.Component<{links: Array<ILink>}, {}> {

  render() {
    return (
      <div className="nav">
        <ul className="links">
          {this.renderLinks()}
        </ul>
      </div>
    );
  }

  private renderLinks = () => {
    return this.props.links.map( (link: ILink, i: number) => {
      return (
        <li className="link" key={i}>
          <a href={link.link} target={link.target || ""}>{link.text}</a>
        </li>
      );
    });
  }
}

export default Nav;
