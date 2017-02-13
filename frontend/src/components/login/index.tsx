import * as React from "react";
import { Form } from "../helpers";
// import "./style.scss";

export interface FormInput {
  type: string; // text, number, email, password...
  value: string;
}

export interface LoginState {
  username: FormInput;
  password: FormInput;
}

class Login extends React.Component<{}, LoginState> {

  public inputs = [
    {type: "text", for: "username"},
    {type: "password", for: "password"},
  ]

  constructor (props: any) {
    super(props);
  }

  render() {
    return (
      <div id="login" className="form-wrapper">
        <Form inputs={this.inputs} submit={this.login} />
      </div>
    );
  }

  private login = (state: any, e: any) => {
    console.log('login state', state);
  }

}

export default Login;
