import * as React from "react";
// import "./style.scss";
export interface IInput {
  type: string; // text, number, email, password...
  value: string;
}

export interface InputProps {
  config: any;
  change: any;
}

class Input extends React.Component<InputProps, {}> {

  constructor(props: InputProps) {
    super(props);
  }

  render() {
    return (
      <input
        type={this.props.config.type}
        name={this.props.config.for}
        value={this.props.config.value}
        onChange={this.onChange.bind(this)}
      />
    );
  }

  private onChange = (e: any) => {
    this.props.change(e.target.name, e.target.value);
  }

}

export default Input;
