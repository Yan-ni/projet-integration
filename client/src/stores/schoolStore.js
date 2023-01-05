import { makeObservable, observable, action, runInAction } from 'mobx';
import axios from 'axios';

class SchoolStore {
  constructor() {
    makeObservable(this, {
      selectedSchool: observable,
      schools: observable,
      setSchools: action,
      fetchData: action,
      setSelectedSchool: action,
      unselectSchool: action,
    });
    this.fetchData();
  }

  schools = [];

  selectedSchool = null;

  setSchools(schools) {
    this.schools = schools;
  }

  setSelectedSchool(id) {
    axios
      .get(`http://localhost:3000/api/etablissement/${id}`)
      .then(({ data }) =>
        runInAction(() => {
          this.selectedSchool = data;
        })
      );
  }

  unselectSchool() {
    this.selectedSchool = null;
  }

  fetchData(params) {
    const queryParams = [];
    if (params)
      Object.keys(params).forEach((key) =>
        queryParams.push(`${key}=${params[key]}`)
      );

    axios
      .get(
        `http://localhost:3000/api/etablissements${
          queryParams.length ? `?${queryParams.join('&')}` : ''
        }`
      )
      .then(({ data }) => this.setSchools(data))
      .catch((error) => console.error(error));
  }
}

export default new SchoolStore();
