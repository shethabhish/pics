import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID yz8Pf_lvy3HOdQnQe7k-eVCqDipFwNqHOyi5toP9AKs',
  },
});
