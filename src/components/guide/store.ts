import GUIDES, { IGuide, Guide } from "./guides";
import { observable } from "mobx";

class GuideStore {
    @observable public guides: Array<IGuide> = GUIDES;
    @observable public guide: IGuide = new Guide();

    public getGuide = (id: number) => {
      if (+id === 0) {
        this.guide = new Guide();
      } else {
        this.guide = this.guides.filter( (guide: Guide) => {
          return +guide.id === +id;
        })[0];
      }
      return this.guide;
    }

    public create = (guide: IGuide) => {
      guide.id = this.guides.length++;
      this.guides.push(guide);
    }

    public update = (guide: IGuide) => {
      this.guides = this.guides.map( (g) => {
        if (g.id === guide.id) {
          Object.keys(g).forEach( (key) => {
            g[key] = guide[key];
          });
        }
        return g;
      });
    }

}

let guideStore = new GuideStore();
export default guideStore;
