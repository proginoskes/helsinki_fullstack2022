import axios from 'axios';

const getAll = (server_url) => {
  const request = axios.get(`${server_url}`);
  return request
    .then(response => {
      return response.data
      });
}


  const commService = {
      getAll
  }

  export default commService;