import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID  q5EiNvbY3S1-Pnb2YNAoKZRpdalsU-XbZzbkyc9c1ZU',
  },
});
