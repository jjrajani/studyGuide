import * as React from "react";
import "./style.scss";

export interface SectionProps {

}

export interface SectionState {

}

export default class Section extends React.Component<SectionProps, SectionState> {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}

  constructor(props: SectionProps) {
    super(props);
  }

  render() {
    return (
      <div id="section">
        section
      </div>
    );
  }
}
