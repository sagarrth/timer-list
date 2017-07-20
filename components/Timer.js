import React from 'react';
import helpers from '../utilities/helpers';

class Timer extends React.Component {
  handleDeleteTimer = () => {
    this.props.deleteTimer(this.props.id);
  }

  render () {
    const elapsedString = helpers.renderElapsedString(this.props.elapsed, this.props.runningSince);
    return (
      <div className='ui centered card'>
        <div className='content'>
          <div className='header'>
            {this.props.title}
          </div>
          <div className='meta'>
            {this.props.project}
          </div>
          <div className='center aligned description'>
            <h2>
              {elapsedString}
            </h2>
          </div>
          <div className='extra content'>
            <span className='right floated edit icon' onClick={this.props.editForm}>
              <i className='edit icon' />
            </span>
            <span className='right floated trash icon' onClick={this.handleDeleteTimer}>
              <i className='trash icon' />
            </span>
          </div>
        </div>
        <div className='ui bottom attached blue basic button'>
          Start
        </div>
      </div>
    );
  }
}

export default Timer;
