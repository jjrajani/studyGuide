import * as React from "react";
// import "./style.scss";
import { Input } from "./";

export interface FormProps {
  inputs: Array<any>
  submit: any;
}

class Form extends React.Component<FormProps, {}> {

  constructor(props: FormProps) {
    super(props);
    this.state = this.buildState(this.props.inputs);
  }

  render() {
    return (
      <div className="form">
        {this.form()}
        <button
          className="submit"
          onClick={this.props.submit.bind(this, this.state)}
        >Login
        </button>
      </div>
    );
  }

  private buildState = (inputs: Array<any>) => {
    let state = {};
    inputs.forEach( (input) => { state[input.for] = input.value; });
    return state;
  }

  private form = () => {
    return this.props.inputs.map((input, i) => {
      return <Input key={i} config={input} change={this.change}/>
    });
  }

  private change = (key: string, value: string) => { this.state[key] = value; }

}

export default Form;
