import React from 'react';
import TimerForm from './TimerForm';
import Timer from './Timer';

class EditableTimer extends React.Component {
  state = {
    editFormOpen: false
  };

  openForm = () => {
    this.setState({
      editFormOpen: true
    });
  }

  closeForm = () => {
    this.setState({
      editFormOpen: false
    });
  }

  handleSubmit = (timer) => {
    this.props.formSubmit(timer);
    this.closeForm();
  }

  formClose = () => {
    this.closeForm();
  }

  render () {
    if (this.state.editFormOpen) {
      return (
        <TimerForm id={this.props.id} title={this.props.title} project={this.props.project} onFormSubmit={this.handleSubmit} onFormClose={this.formClose} />
      );
    } else {
      return (
        <Timer id={this.props.id} title={this.props.title} project={this.props.project} elapsed={this.props.elapsed} runningSince={this.props.runningSince}
        editForm={this.openForm} deleteTimer={this.props.deleteTimer} onStopClick={this.props.onStopClick} onStartClick={this.props.onStartClick} />
      );
    }
  }
}

export default EditableTimer;
