import axios from 'axios';

const downloadMp3 = (videoId) =>
  axios.get(`/download/${videoId}`, {
    responseType: 'blob',
    timeout: 120000,
  });

export default downloadMp3;
