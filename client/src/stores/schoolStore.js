import { makeObservable, observable, action, runInAction } from 'mobx';
import axios from 'axios';
import API_URL from '../config/apiUrl';

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
    axios.get(`${API_URL}/api/etablissement/${id}`).then(({ data }) =>
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
        `${API_URL}/api/etablissements${
          queryParams.length ? `?${queryParams.join('&')}` : ''
        }`
      )
      .then(({ data }) => this.setSchools(data))
      .catch((error) => console.error(error));
  }
}

export default new SchoolStore();
