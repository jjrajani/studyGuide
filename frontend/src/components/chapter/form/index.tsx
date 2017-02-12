import * as React from "react";
import "./style.scss";
import { IChapter } from "../chapter";
import chapterStore from "../store";
// import NewResourceChapterForm from "../../chapter/form/new-resource";

export interface ChapterFormProps {
  params: any;
  change?: Function;
}

export interface ChapterFormState {
  chapter: IChapter;
}

export default class ChapterForm extends React.Component<ChapterFormProps, ChapterFormState> {

  constructor (props: ChapterFormProps) {
    super(props);
    this.state = {chapter: chapterStore.getChapter(this.props.params.id, this.props.params.chatperId)};
  }

  render() {
    let chapter = this.state.chapter;
    return (
      <div id="new-chapter" className="form-wrapper">
        <div className="header">
          <h3>New Chapter</h3>
        </div>
        <div className="chapter form">
          <div className="text-input">
            <label htmlFor="title">
              Title:
              <input
                className="title"
                type="text"
                name="title"
                value={chapter.title}
                placeholder="Chapter Title"
                onChange={this.updateChapter.bind(this, "title")}
              />
            </label>
          </div>
          <div className="text-input">
            <label htmlFor="description">
              Description:
              <textarea
                name="description"
                value={chapter.description}
                placeholder="Chapter Description"
                onChange={this.updateChapter.bind(this, "description")}
              />
            </label>
          </div>
        </div>
        <button className="create-chapter submit" onClick={this.createChapter}>Create Chapter</button>
      </div>
    );
  }

  private updateChapter = (key: string, e: any) => {
    if (this.props.change) {
      console.log('has change function')
      this.props.change(this.state.chapter)
    }
    let state = this.state;
    state.chapter[key] = e.target.value;
    this.setState(state);
  }

  private createChapter = () => {
    if (this.valid()) {
      chapterStore.createChapter(this.state.chapter, this.props.params.id);
    } else {
      console.log("title is required", this.state.chapter);
    }
  }

  private valid = (): boolean => {
    return (this.state.chapter.title.length > 0);
  }

}
