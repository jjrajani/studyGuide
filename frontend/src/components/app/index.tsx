import * as React from "react";
import "./style.scss";
import Header from "../header";

class App extends React.Component<{}, {}> {
  render() {
    return (
      <div className="app">
        <Header />
        {this.props.children}
      </div>
    );
  }
}

export default App;
