import { makeObservable, observable, action } from 'mobx';

class FilterStore {
  constructor() {
    makeObservable(this, {
      secteur: observable,
      setSecteur: action,
    });
  }

  secteur = null;

  setSecteur(state) {
    this.secteur = state;
  }
}

export default new FilterStore();
