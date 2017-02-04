import * as React from "react";
import "./style.scss";
import { ILink } from "./link";
import { Link } from "react-router";

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
          <Link to={link.link}>{link.text}</Link>
        </li>
      );
    });
  }
}

export default Nav;
