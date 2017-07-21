import React from 'react';
import axios from 'axios';
import {render} from 'react-dom';
import TimersDashboard from './TimersDashboard';

const timers = [
  {
    title: 'Practice squat',
    project: 'Gym Chores',
    id: 1,
    elapsed: 5456099,
    runningSince: Date.now(),
  },
  {
    title: 'Bake squash',
    project: 'Kitchen Chores',
    id: 2,
    elapsed: 1273998,
    runningSince: null,
  },
];

render(<TimersDashboard timers={timers} />, document.getElementById('content'));
