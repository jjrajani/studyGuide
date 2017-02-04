// import { IGuide } from "../guide/guides";
import guideStore from "../guide/store";
import { IResource, Resource } from "./resource";
import { observable } from "mobx";

class ResourceStore {
    @observable public resource: IResource = new Resource();

    public getResource = (guideId: number) => {
      console.log('getting resource', guideId)
      // if (+id === 0) {
      //   this.resource = new Resource();
      // } else {
      //   this.resource = this.resources.filter( (resource: Resource) => {
      //     return +resource.id === +id;
      //   })[0];
      // }
      // return this.resource;
      return new Resource();
    }

    public createResource = (resource: IResource, guideId: number) => {
      console.log('creation resource', resource, guideId)
      resource.id = 1;
      guideStore.guides[guideId - 1].resource = resource;
    }

    public update = (resource: IResource) => {
      console.log('updating resource', resource)
      // this.resources = this.resources.map( (g) => {
      //   if (g.id === resource.id) {
      //     Object.keys(g).forEach( (key) => {
      //       g[key] = resource[key];
      //     });
      //   }
      //   return g;
      // });
    }

}

let resourceStore = new ResourceStore();
export default resourceStore;
