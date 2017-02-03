export interface IGuide {
  title: string
}

export class Guide {
  title: "string";
}

class GuideStore {
    guide: IGuide = new Guide();
    init() {
        console.log('init new guide', this.guide)
    }
}

let guideStore = new GuideStore();
export default guideStore;
