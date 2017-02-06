// import { IGuide } from "../guide/guides";
import guideStore from "../guide/store";
import { ISection } from "./section";
// import { INote } from "../note/note";
import { observable } from "mobx";

class ChapterStore {
    @observable public section: ISection;

    public getSection = (guideId: number, chapterId: number, sectionId: number) => {
      console.log("getting section", "guideId", guideId, "chapterId", chapterId, "sectionId", sectionId);
      console.log(guideStore.guides);
      if (sectionId !== undefined) {
        let section =  guideStore.guides.filter( (guide) => {
          return +guide.id === +guideId;
        })[0].resource.chapters[(chapterId - 1)].sections[sectionId - 1];
        this.section = section;
      } else {
        this.section = {
          id: 0,
          pageNumber: 0,
          title: "",
          description: "",
          notes: [],
        }
      }
      console.log("got section", this.section);
    }

    public createSection = (section: ISection, guideId: number, chapterId: number) => {
      console.log("sections before new created", guideStore.guides[guideId - 1].resource.chapters[(chapterId - 1)].sections)
      section.id = guideStore.guides[guideId - 1].resource.chapters[(chapterId - 1)].sections.length;;
      guideStore.guides[guideId - 1].resource.chapters[(chapterId - 1)].sections.push(section);
      console.log("sections before new created", guideStore.guides[guideId - 1].resource.chapters[(chapterId - 1)].sections)
    }

}

let chapterStore = new ChapterStore();
export default chapterStore;
