import * as React from 'react';
import './style.scss';

export default class NotFound extends React.Component<{}, {}> {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}

  render() {
    return (
      <div id="not-found">
        <h1>
          404 <small>Not Found :(</small>
        </h1>
      </div>
    );
  }
}
