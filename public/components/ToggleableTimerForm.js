import React from 'react';
import TimerForm from './TimerForm';

class ToggleableTimerForm extends React.Component {
  state = {
    isOpen: false
  }

  openForm = () => {
    this.setState({
      isOpen: true
    });
  }

  closeForm = () => {
    this.setState({
      isOpen: false
    });
  }

  formClose = () => {
    this.closeForm();
  }

  handleSubmit = (newTimer) => {
    this.props.formSubmit(newTimer);
    this.closeForm();
  }

  render () {
    if (this.state.isOpen) {
      return (
        <TimerForm onFormSubmit={this.handleSubmit} onFormClose={this.formClose} />
      );
    } else {
      return (
        <div className='ui basic content center aligned segment'>
          <button className='ui basic button icon' onClick={this.openForm}>
            <i className='plus icon'></i>
          </button>
        </div>
      );
    }
  }
}

export default ToggleableTimerForm;
