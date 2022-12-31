import { makeObservable, observable, action } from 'mobx';
import axios from 'axios';

class SchoolStore {
  constructor() {
    makeObservable(this, {
      schools: observable,
      setSchools: action,
      fetchData: action,
    });
    this.fetchData();
  }

  schools = [];

  setSchools(schools) {
    this.schools = schools;
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
