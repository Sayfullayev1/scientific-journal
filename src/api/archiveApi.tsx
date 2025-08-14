import axios from 'axios';
import api from './api';

const apiUrl = api


export default async function getArchiveYears() {
  const response = await axios.get(`${apiUrl}/articles/year`);
//   console.log('Fetching archive years:', response.data);
  
  return response.data;
}

