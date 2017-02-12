import * as React from "react";
// import "./style.scss";

export interface ListExtenderProps {
  renderedListSize: number;
  listLength: number;
  setListSize: Function;
}

export interface ListExtenderState {

}

class Nav extends React.Component<ListExtenderProps, ListExtenderState> {

  private defaultListSize: number = 3;

  constructor(props: ListExtenderProps) {
    super(props);
  }

  render() {
    return (
      <div className="extender">
      {this.showLess()}
      {this.showMore()}
      </div>
    );
  }

  private showMore = () => {
    return (
      (this.props.renderedListSize < this.props.listLength)
      ? <p onClick={this.increaseListSize} className="button">Show More</p>
      : null
    )
  }

  private showLess = () => {
    return (
      (this.props.renderedListSize > this.defaultListSize)
      ? <p onClick={this.decreaseListSize} className="button">Show Less</p>
      : null
    )
  }

  private increaseListSize = () => {
    let listSize = this.props.renderedListSize > this.props.listLength
    ? this.props.listLength
    : this.props.renderedListSize + 3;
    this.props.setListSize(listSize);
  }

  private decreaseListSize = () => {
    let listSize = (this.props.renderedListSize - 3) > this.defaultListSize
    ? (this.props.renderedListSize - 3)
    : this.defaultListSize;
    this.props.setListSize(listSize)
  }
}

export default Nav;
