import * as React from "react";
import "./style.scss";

import guideStore from "../store";
import { Guide, IGuide } from "../guides";
import { observer } from "mobx-react";

import { IResource } from "../../resource/resource";
import ResourceForm from "../../resource/form";

export interface GuideFormProps {
  guide?: Guide;
  params: any;
}

export interface GuideFormState {
  guide: IGuide;
}

@observer
export default class GuideForm extends React.Component<GuideFormProps, GuideFormState> {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}

  constructor (props: GuideFormProps) {
    super(props);
    this.state = {guide: guideStore.getGuide(props.params.id)};
  }

  public componentDidUpdate () {
    guideStore.getGuide(this.props.params.id);
  }

  render() {
    return (
      <div id="new-guide" className="form-wrapper">
        <div className="header">
          <h3>New Guide</h3>
        </div>
        <div className="form">
          <div className="text-input">
            <label htmlFor="title">
              Title
              <input
                id="title"
                type="text"
                placeholder="Title"
                value={this.state.guide.title}
                onChange={this.updateField.bind(this, "title")}
              />
            </label>
          </div>
          <div className="text-input">
            <label htmlFor="description">
              Description
              <textarea
                id="description"
                value={this.state.guide.description}
                placeholder="Description"
                onChange={this.updateField.bind(this, "description")}
              />
            </label>
          </div>
          <ResourceForm change={this.updateResource} params={{id: this.state.guide.id}} />
        </div>
        { +this.state.guide.id === 0
            ? <button className="submit" onClick={this.createGuide}>Save Guide</button>
            : <button className="submit" onClick={this.updateGuide}>Update Guide</button>
        }

      </div>
    );
  }

  private updateField = (key: string, e: any) => {
    let state = this.state;
    state.guide[key] = e.target.value;
    this.setState(state);
  }

  private updateResource = (resource: IResource) => {
    let state = this.state;
    state.guide.resource = resource;
    console.log('resource update', state.guide.resource)
    this.setState(state);
  }

  private createGuide = () => {
    if ( this.valid(this.state.guide)) {
      console.log(this.state.guide);
      guideStore.create(this.state.guide);
    } else {
      console.log("invalid form");
    }
  }

  private updateGuide = () => {
    guideStore.update(this.state.guide);
  }

  private valid = (guide: IGuide) => {
    return (guide.title.length > 0)
    ? true
    : false;
  }

}
