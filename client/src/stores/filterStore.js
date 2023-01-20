import { makeObservable, observable, action } from 'mobx';

class FilterStore {
  constructor() {
    makeObservable(this, {
      secteur: observable,
      setSecteur: action,
      type: observable,
      setType: action,
    });
  }

  secteur = null;
  type = null;

  setSecteur(state) {
    this.secteur = state;
  }
  setType(state) {
    this.type = state;
  }
}

export default new FilterStore();
