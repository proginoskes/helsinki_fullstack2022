
import axios from 'axios';
const server_url = 'https://sleepy-reef-98505.herokuapp.com/api/persons';

const getAll = () => {
    const request = axios.get(`${server_url}`);
    return request
      .then(response => {
        return response.data
      })
      //.catch((error)=>error);
  }

  const addRecord = (newRecord) => {
    const request = axios.post(`${server_url}`, newRecord);
    return request
      .then(response => {
        return response.data
      })
      //.catch((error)=>error);
  }

  const deleteRecord = (id) => {
      const request = axios.delete(`${server_url}/${id}`);
      return request
        .then(response => {
          return response.data
        })
        //.catch((error)=>error);
  }

  const updateRecord = (id, newrec) => {
      const request = axios.put(`${server_url}/${id}`, newrec);
      return request
        .then(response => {
          return response.data
        })
        //.catch((error)=>error);
  }

  const commService = {
      getAll, 
      addRecord,
      deleteRecord,
      updateRecord
  }

  export default commService;