// import { IGuide } from "../guide/guides";
import guideStore from "../guide/store";
import { IChapter, Chapter } from "./chapter";
import { observable } from "mobx";

class ChapterStore {
    @observable public chapter: IChapter = new Chapter();

    public getChapter = (guideId: number, chapterId: number) => {
      console.log("getting chapter", "guideId", guideId, "chapterId", chapterId);
      console.log(guideStore.guides);
      let chapter =  guideStore.guides.filter( (guide) => {
        return +guide.id === +guideId;
      })[0].resource.chapters[(chapterId - 1)];
      console.log("found chapter", chapter);
      return chapter || new Chapter();
    }

    public createChapter = (chapter: IChapter, guideId: number) => {
      console.log("chapters before new created", guideStore.guides[guideId - 1].resource.chapters)
      chapter.id = guideStore.guides[guideId - 1].resource.chapters.length;;
      guideStore.guides[guideId - 1].resource.chapters.push(chapter);
      console.log("chapters after new created", guideStore.guides[guideId - 1].resource.chapters)
    }

}

let chapterStore = new ChapterStore();
export default chapterStore;
