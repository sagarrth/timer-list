import React from 'react';
import EditableTimerList from './EditableTimerList';
import ToggleableTimerForm from './ToggleableTimerForm';

class TimersDashboard extends React.Component {
  state = {
    timers: this.props.timers
  };

  render () {
    return (
      <div className='ui centered grid'>
        <div className='column'>
          <EditableTimerList timers={this.state.timers}/>
          <ToggleableTimerForm />
        </div>
      </div>
    );
  }
}

export default TimersDashboard;
