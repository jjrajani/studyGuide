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
    let config = this.props.config;
    return (
      <div className="text-input">
        <label htmlFor={config.for}>{config.for}
          <input
            id={config.for}
            type={config.type}
            name={config.for}
            value={config.value}
            onChange={this.onChange.bind(this)}
          />
        </label>
      </div>
    );
  }

  private onChange = (e: any) => {
    this.props.change(e.target.name, e.target.value);
  }

}

export default Input;
