import { makeObservable } from 'mobx';

class MapStore {
  constructor() {
    makeObservable(this, {});
  }

  map = null;

  setMap(map) {
    this.map = map;
  }

  center() {
    this.map?.setView([46.2276, 2.2137], 6);
  }
}

export default new MapStore();
