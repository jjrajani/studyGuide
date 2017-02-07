import * as React from "react";
import "./style.scss";
import { IResource } from "../resource";
import resourceStore from "../store";
// import ChapterForm from "../../chapter/form/";

export interface ResourceFormProps {
  params: any;
  change?: Function;
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
      <div id="new-resource" className="form-wrapper">
        {this.props.change
          ? (<div className="sub-header">
               <h3>Resource</h3>
             </div>)
          : (<div className="header">
               <h3>New Resource</h3>
             </div>)
        }
        <div className="resource form">
          <div className="text-input">
            <label htmlFor="title">
              {this.props.change ? "Resource" : ""} Title:
              <input
                type="text"
                name="title"
                value={resource.title}
                placeholder="Resource Title"
                onChange={this.updateResource.bind(this, "title")}
              />
            </label>
          </div>
          <div className="text-input">
            <label htmlFor="description">
              {this.props.change ? "Resource" : ""} Description:
              <textarea
                name="description"
                value={resource.description}
                placeholder="Resource Description"
                onChange={this.updateResource.bind(this, "description")}
              />
            </label>
          </div>
        </div>
        {this.props.change ? null : <button className="create-resource submit" onClick={this.createResource}>Create Resource</button>}
      </div>
    );
  }

  private updateResource = (key: string, e: any) => {
    if (this.props.change) {
      console.log('has change function')
      this.props.change(this.state.resource)
    }
    let state = this.state;
    state.resource[key] = e.target.value;
    this.setState(state);
  }

  private createResource = () => {
    if (this.valid()) {
      resourceStore.createResource(this.state.resource, this.props.params.id)
    } else {
        console.log("title is required", this.state.resource);
    }
  }

  private valid = (): boolean => {
    return (this.state.resource.title.length > 0);
  }

}
