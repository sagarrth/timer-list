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

  handleCreateFormSubmit = (timer) => {
    this.createTimer(timer);
  }

  handleEditFormSubmit = (timer) => {
    this.editTimer(timer);
  }

  handleDeleteTimer = (id) => {
    this.deleteTimer(id);
  }

  render () {
    return (
      <div className='ui centered grid'>
        <div className='column'>
          <EditableTimerList timers={this.state.timers} formSubmit={this.handleEditFormSubmit} deleteTimer={this.handleDeleteTimer}/>
          <ToggleableTimerForm formSubmit={this.handleCreateFormSubmit} />
        </div>
      </div>
    );
  }
}

export default TimersDashboard;
