import React from 'react';

class TimerForm extends React.Component {
  state = {
    title: this.props.title || '',
    project: this.props.project || ''
  };

  render () {
    const submitText = this.props.id ? 'Update' : 'Create';
    return (
      <div className='ui centered card'>
        <div className='content'>
          <div className='ui form'>
            <div className='field'>
              <label>Title</label>
              <input type='text' value={this.state.title} />
            </div>
            <div className='field'>
              <label>Project</label>
              <input type='text' value={this.state.project} />
            </div>
            <div className='ui two bottom attached buttons'>
              <button className='ui basic blue button'>
                {submitText}
              </button>
              <button className='ui basic red button'>
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TimerForm;
