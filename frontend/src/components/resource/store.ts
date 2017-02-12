// import { IGuide } from "../guide/guides";
import guideStore from "../guide/store";
import { IResource, Resource } from "./resource";
import { observable } from "mobx";

class ResourceStore {
    @observable public resource: IResource = new Resource();

    public getResource = (guideId: number) => {
      console.log("getting resource", guideId);
      console.log(guideStore.guides);
      if (guideId === 0) { return new Resource(); }
      let resource =  guideStore.guides.filter( (guide) => {
        return +guide.id === +guideId;
      })[0].resource;
      console.log("found resource", resource);
      return resource || new Resource();
    }

    public createResource = (resource: IResource, guideId: number) => {
      resource.id = 1;
      guideStore.guides[guideId - 1].resource = resource;
    }

}

let resourceStore = new ResourceStore();
export default resourceStore;
