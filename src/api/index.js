import axios from 'axios';


const config = {
  baseUrl: 'https://api.hnpwa.com/v0/',
}

const fetchNewsList = () => axios.get(`${config.baseUrl}news/1.json`);

const fetchAskList = () => axios.get(`${config.baseUrl}ask/1.json`);

const fetchJobsList = () => axios.get(`${config.baseUrl}jobs/1.json`);

const fetchUserInfo = (username) => axios.get(`${config.baseUrl}user/${username}.json`);

export {
  fetchNewsList,
  fetchAskList,
  fetchJobsList,
  fetchUserInfo
}