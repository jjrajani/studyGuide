export interface IGuide {
  title: string
}

export class Guide {
  title: "string";
}

class NewGuideStore {
    guide: IGuide = new Guide();
    init() {
        console.log('init new guide', this.guide)
    }
}

let newGuideStore = new NewGuideStore();
export default newGuideStore;
