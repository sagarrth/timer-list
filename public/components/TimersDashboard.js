import React from 'react';
import axios from 'axios';
import EditableTimerList from './EditableTimerList';
import ToggleableTimerForm from './ToggleableTimerForm';
import helpers from '../utilities/helpers';


class TimersDashboard extends React.Component {
  state = {
    timers: []
  };

  componentDidMount () {
    helpers.getTimers().then(this.updateTimersState);
  }

  updateTimersState = (timers) => {
    this.setState({
      timers: timers
    });
  }

  createTimer = (timer) => {
    const newTimer = helpers.newTimer(timer);
    this.setState({
      timers: this.state.timers.concat(newTimer)
    });
    helpers.createTimer(newTimer).then(this.updateTimersState);
  }

  editTimer = (editTimer) => {
    this.setState({
      timers: this.state.timers.map((timer) => {
        if (timer.id === editTimer.id) {
          return Object.assign({}, timer, editTimer);
        } else {
          return timer;
        }
      })
    });
    helpers.updateTimer(editTimer);
  }

  deleteTimer = (id) => {
    this.setState({
      timers: this.state.timers.filter((timer) => timer.id !== id)
    });
    helpers.deleteTimer({id: id});
  }

  startTimer = (id) => {
    var now = Date.now();
    this.setState({
      timers: this.state.timers.map((timer) => {
        if (timer.id === id) {
          return Object.assign({}, timer, {runningSince: now});
        } else {
          return timer;
        }
      })
    });
    helpers.startTimer({id: id, start: now});
  }

  stopTimer = (id) => {
    var now = Date.now();
    this.setState({
      timers: this.state.timers.map((timer) => {
        if (timer.id === id) {
          return Object.assign({}, timer, {runningSince: null, elapsed: now - timer.runningSince + timer.elapsed});
        } else {
          return timer;
        }
      })
    });
    helpers.stopTimer({id: id, stop: now});
  }

  handleCreateFormSubmit = (timer) => {
    this.createTimer(timer);
  }

  handleEditFormSubmit = (timer) => {
    this.editTimer(timer);
  }

  handleDeleteTimer = (id) => {
    this.deleteTimer(id);
  }

  handleStartClick = (id) => {
    this.startTimer(id);
  }

  handleStopClick = (id) => {
    this.stopTimer(id);
  }

  render () {
    return (
      <div className='ui centered grid'>
        <div className='column'>
          <EditableTimerList timers={this.state.timers} formSubmit={this.handleEditFormSubmit} deleteTimer={this.handleDeleteTimer}
          onStopClick={this.handleStopClick} onStartClick={this.handleStartClick} />
          <ToggleableTimerForm formSubmit={this.handleCreateFormSubmit} />
        </div>
      </div>
    );
  }
}

export default TimersDashboard;
