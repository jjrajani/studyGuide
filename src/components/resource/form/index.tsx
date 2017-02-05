import * as React from "react";
import "./style.scss";
import { IResource } from "../resource";
import resourceStore from "../store";
// import NewResourceChapterForm from "../../chapter/form/new-resource";

export interface ResourceFormProps {
  params: any;
}

export interface ResourceFormState {
  resource: IResource;
}

export default class ResourceForm extends React.Component<ResourceFormProps, ResourceFormState> {

  constructor (props: ResourceFormProps) {
    super(props);
    this.state = {resource: resourceStore.getResource(this.props.params.id)};
  }

  render() {
    let resource = this.state.resource;
    return (
      <div id="new-resource">
        <h3>New Resource</h3>
        <div className="resource-form">
          <div className="text-input">
            <label htmlFor="title">
              Title:
              <input
                className="title"
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
        <button className="create-resource" onClick={this.createResource}>Create Resource</button>
      </div>
    );
  }

  private updateResource = (key: string, e: any) => {
    let state = this.state;
    state.resource[key] = e.target.value;
    this.setState(state);
  }

  private createResource = () => {
    if (this.valid()) {
      resourceStore.createResource(this.state.resource, this.props.params.id);
    } else {
      console.log("title is required", this.state.resource);
    }
  }

  private valid = (): boolean => {
    return (this.state.resource.title.length > 0);
  }

}
