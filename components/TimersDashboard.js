import React from 'react';
import EditableTimerList from './EditableTimerList';
import ToggleableTimerForm from './ToggleableTimerForm';
import helpers from '../utilities/helpers';


class TimersDashboard extends React.Component {
  state = {
    timers: this.props.timers
  };

  createTimer = (timer) => {
    const newTimer = helpers.newTimer(timer);
    this.setState({
      timers: this.state.timers.concat(newTimer)
    });
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
  }

  deleteTimer = (id) => {
    this.setState({
      timers: this.state.timers.filter((timer) => timer.id !== id)
    });
  }

  startTimer = (id) => {
    this.setState({
      timers: this.state.timers.map((timer) => {
        if (timer.id === id) {
          return Object.assign({}, timer, {runningSince: Date.now()});
        } else {
          return timer;
        }
      })
    });
  }

  stopTimer = (id) => {
    this.setState({
      timers: this.state.timers.map((timer) => {
        if (timer.id === id) {
          return Object.assign({}, timer, {runningSince: null, elapsed: Date.now() - timer.runningSince + timer.elapsed});
        } else {
          return timer;
        }
      })
    });
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
