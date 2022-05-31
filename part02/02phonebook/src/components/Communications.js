
import axios from 'axios';
const server_url = 'http://localhost:3005';

const getAll = () => {
    const request = axios.get(`${server_url}/persons`);
    return request
      .then(response => {
        return response.data
      });
  }

  const addRecord = (newRecord) => {
    const request = axios.post(`${server_url}/persons`, newRecord);
    return request
      .then(response => {
        return response.data
      });
  }

  const deleteRecord = (id) => {
      const request = axios.delete(`${server_url}/persons/${id}`);
      return request
        .then(response => {
          return response.data
        });
  }

  const updateRecord = (id, newrec) => {
      const request = axios.put(`${server_url}/persons/${id}`, newrec);
      return request
        .then(response => {
          return response.data
        });
  }

  const commService = {
      getAll, 
      addRecord,
      deleteRecord,
      updateRecord
  }

  export default commService;