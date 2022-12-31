import { makeObservable, observable, action } from 'mobx';
import axios from 'axios';

class SchoolStore {
  constructor() {
    makeObservable(this, {
      schools: observable,
      setSchools: action,
      loadAPIData: action,
    });
    this.loadAPIData();
  }

  schools = [];

  setSchools(schools) {
    this.schools = schools;
  }

  loadAPIData() {
    axios
      .get('http://localhost:3000/api/etablissements')
      .then((res) => {
        const { data } = res;
        this.setSchools(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }
}

export default new SchoolStore();
