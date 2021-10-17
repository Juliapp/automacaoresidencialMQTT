import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://mqttnodeapi.herokuapp.com',
});

export const getStates = async () => {
  const { data } = await instance.get('/states');
  return data;
};

export const getAlarmLogs = async () => {
  const { data } = await instance.get('/alarmlogs');
  return data;
};
