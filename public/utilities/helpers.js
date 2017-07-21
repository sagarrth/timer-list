import uuid from 'uuid';
import axios from 'axios';

function renderElapsedString(elapsed, runningSince) {
  let totalElapsed = elapsed;
  if (runningSince) {
    totalElapsed += Date.now() - runningSince;
  }
  return millisecondsToHuman(totalElapsed);
}

function millisecondsToHuman(ms) {
  const seconds = Math.floor((ms / 1000) % 60);
  const minutes = Math.floor((ms / 1000 / 60) % 60);
  const hours = Math.floor(ms / 1000 / 60 / 60);

  const humanized = [
    pad(hours.toString(), 2),
    pad(minutes.toString(), 2),
    pad(seconds.toString(), 2),
  ].join(':');

  return humanized;
}

function pad(numberString, size) {
  let padded = numberString;
  while (padded.length < size) padded = `0${padded}`;
  return padded;
}

function newTimer(attrs = {}) {
  const timer = {
    title: attrs.title || 'Timer',
    project: attrs.project || 'Project',
    id: uuid.v4(), // eslint-disable-line no-undef
    elapsed: 0,
  };

  return timer;
}

function checkStatus (response) {
  if (response.status >= 200 && response.status < 300) {
    return response.data;
  } else {
    const error = new Error(`HTTP Error ${response.statusText}`);
    error.status = response.statusText;
    error.response = response;
    console.log(error);
    throw error;
  }
}

function getTimers () {
  return axios({
    url: 'api/timers',
    method: 'GET',
    headers: {
      Accept: 'application/json'
    }
  })
  .then(checkStatus);
}

function createTimer(data) {
  delete data.elapsed;
  return axios({
    url: '/api/timers',
    method: 'POST',
    data: data,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
  }).then(checkStatus);
}

function deleteTimer(data) {
  return axios({
    url: '/api/timers',
    method: 'DELETE',
    data: data,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  }).then(checkStatus);
}

function updateTimer(data) {
  return axios({
    url: '/api/timers',
    method: 'PUT',
    data: data,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  }).then(checkStatus);
}

function startTimer(data) {
  return axios({
    url: '/api/timers/start',
    method: 'POST',
    data: data,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  }).then(checkStatus);
}

function stopTimer(data) {
  return axios({
    url: '/api/timers/stop',
    method: 'POST',
    data: data,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  }).then(checkStatus);
}

var helpers = {
  renderElapsedString: renderElapsedString,
  newTimer: newTimer,
  getTimers: getTimers,
  createTimer: createTimer,
  deleteTimer: deleteTimer,
  updateTimer: updateTimer,
  startTimer: startTimer,
  stopTimer: stopTimer
}

export default helpers;
