import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addReminder, deleteReminder, clearReminders } from './actions';
import moment from 'moment';
import { BrowserRouter, Route, Link } from 'react-router-dom';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      dueDate: '',
      email: ''
    }
    this.emailChange = this.emailChange.bind(this);
  }
  emailChange(event) {
    this.setState({ email: event.target.value });
  }

  addReminder() {
    console.log('this.state.dueDate', this.state.dueDate);
    this.props.addReminder(this.state.text, this.state.dueDate);
  }

  deleteReminder(id) {
    this.props.deleteReminder(id);
  }

  renderReminders() {
    const { reminders } = this.props;
    return (
      <ul className="list-group col-sm-4">
      {
        reminders.map(reminder => {
          return(
            <li key={reminder.id} className="list-group-item">
            <div className="list-item">
            <div>{reminder.text}</div>
            <div><em>{moment(new Date(reminder.dueDate)).fromNow()}</em></div>
            </div>
            <div
            className="list-item delete-button"
            onClick={() => this.deleteReminder(reminder.id)}
            >
            X
            </div>
            </li>
          )
        })
      }
      </ul>
    )
  }
  render() {
    return (
      <div className="App">
        <div className="title">
          <h1><strong>To Do List App</strong></h1>
          </div>
          <div className="form-inline">
          <div className="from-group">
          <form>
          <input
          className="form-control"
          placeholder="Remind me to..."
          onChange={event => this.setState({text: event.target.value})}
          />
          <input
          className="form-control"
          type="datetime-local"
          onChange={event => this.setState({dueDate: event.target.value})}
          />
          </form>
      </div>
      <button 
      type="button"
      className="btn btn-royal"
      onClick={() => this.addReminder()}>Add Reminder</button>
      </div>
      { this.renderReminders() }
      <div className="btn btn-danger"
      onClick={() => this.props.clearReminders()}
      >
      Clear Reminders
      </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    reminders: state
  }
}
export default connect(mapStateToProps, {addReminder, deleteReminder, clearReminders })(App);
