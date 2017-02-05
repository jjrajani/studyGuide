import * as React from "react";
import "./style.scss";
import { IResource } from "../../resource";

export interface NewGuideResourceFormProps {
  resource: IResource;
  change?: any;
}

export interface NewGuideResourceFormState {
  resource: IResource;
}

export default class NewGuideResourceForm extends React.Component<NewGuideResourceFormProps, NewGuideResourceFormState> {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}

  constructor (props: NewGuideResourceFormProps) {
    super(props);
    this.state = {resource: this.props.resource};
  }

  render() {
    let resource = this.state.resource;
    return (
      <div className="resource-form">
        <p>Resource</p>
        <div className="text-input">
          <label htmlFor="title">
            Title:
            <input
              type="text"
              id="title"
              name="title"
              value={resource.title}
              placeholder="Resource Title"
              onChange={this.updateResource.bind(this, "title")}
            />
          </label>
        </div>
        <div className="text-input">
          <label htmlFor="resource.description">
            Description:
            <textarea
              id="resource.description"
              name="description"
              value={resource.description}
              placeholder="Resource Description"
              onChange={this.updateResource.bind(this, "description")}
            />
          </label>
        </div>
      </div>
    );
  }

    private updateResource = (key: string, e: any) => {
      let state = this.state;
      state.resource[key] = e.target.value;
      this.setState(state);
      this.props.change(this.state.resource);
    }
}
