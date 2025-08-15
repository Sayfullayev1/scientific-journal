import axios from 'axios';
import api from './api';

const apiUrl = api


export default async function getArchiveYears() {
  try {
    const response = await axios.get(`${apiUrl}/articles/year`);
    return response.data;
  } catch (error) {
    // Выведите ошибку в консоль для SSR
    // console.error('Ошибка запроса /articles/year:', error);
    throw error;
  }
}

