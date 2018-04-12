import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addReminder, deleteReminder, clearReminders } from './actions';
import moment from 'moment';
import { BrowserRouter, Route, Link } from 'react-router-dom';

const Header = () => <h2>Header</h2>;
const Login = () => <h2>Login</h2>;
const Reminders = () => <h2>Reminders</h2>;

class NavComponent extends Component {
  render() {
  return (
    <BrowserRouter>
    <div>
    <Nav />
    </div>
    </BrowserRouter>
  );
}};
