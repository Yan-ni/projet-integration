import { makeObservable } from 'mobx';

class MapStore {
  constructor() {
    makeObservable(this, {});
  }

  map = null;

  setMap(map) {
    this.map = map;
  }
}

export default new MapStore();
