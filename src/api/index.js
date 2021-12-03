import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://mqttnodeapi.herokuapp.com',
});

const instanceAssistant = axios.create({
  baseURL: 'https://assistantmqttapi.herokuapp.com/',
});

export const getStates = async () => {
  const { data } = await instance.get('/states');
  return data;
};

export const getAlarmLogs = async () => {
  const { data } = await instance.get('/alarmlogs');
  return data;
};

export const getPing = async () => {
  const { data } = await instanceAssistant.get('/ping');
  const { isOnline } = data;
  return isOnline;
};

export const getTimeCron = async () => {
  const { data } = await instanceAssistant.get('/timecron');
  const { time_cron } = data;
  return time_cron;
};

export const resetPing = async (time_cron) => {
  const { data } = await instanceAssistant.post('/reset-ping', { time_cron });
  const { ping } = data;
  return ping;
};
