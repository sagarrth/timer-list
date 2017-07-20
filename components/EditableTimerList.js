import React from 'react';
import EditableTimer from './EditableTimer';

class EditableTimerList extends React.Component {
  render () {
    const timers = this.props.timers.map((timer) => (
        <EditableTimer key={timer.id} id={timer.id} title={timer.title} project={timer.project} elapsed={timer.elapsed} runningSince={timer.runningSince}
        formSubmit={this.props.formSubmit} deleteTimer={this.props.deleteTimer} onStopClick={this.props.onStopClick} onStartClick={this.props.onStartClick} />
    ));
    return (
      <div id='timers'>
        {timers}
      </div>
    );
  }
}

export default EditableTimerList;
