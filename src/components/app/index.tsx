import * as React from 'react';
import './style.scss';
import Header from '../header';

class App extends React.Component<{}, {}> {
  render() {
    return (
      <div className="app">
        <Header />
        <p className="app-intro">
          To get started, edit <code>src/components/index.tsx</code> and save to reload.
        </p>
        {this.props.children}
      </div>
    );
  }
}

export default App;
