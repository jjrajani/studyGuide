import * as React from 'react';
import './style.scss';

export interface ILink { text: string, link: string, target?: string };

class Header extends React.Component<{}, {}> {

  private links: Array<ILink> = [
    {
      text: "TypeScript",
      target: '_blank',
      link: "https://www.typescriptlang.org/docs/tutorial.html"
    },
    {
      text: "React-Router",
      target: '_blank',
      link: "https://github.com/ReactTraining/react-router"
    },
    {
      text: "SASS Loader",
      target: '_blank',
      link: "https://github.com/jtangelder/sass-loader"
    },
    {
      text: "GitHub",
      target: '_blank',
      link: "https://github.com/jjrajani/react-template"
    },
  ]

  render() {
    const logo = require('./logo.svg');
    return (
      <div id="header">
        <img src={logo} className="logo" alt="logo" />
        <h2>React template Pre-packed with...</h2>
        <ul className="links">
          { this.renderLinks() }
        </ul>
      </div>
    );
  }

  private renderLinks = () => {
    return this.links.map( (link) => {
      return (
        <li className="link">
          <a href={link.link} target={link.target || ""}>{link.text}</a>
        </li>
      )
    })
  }
}

export default Header;
