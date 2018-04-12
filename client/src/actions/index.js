import { ADD_REMINDER, DELETE_REMINDER, CLEAR_REMINDERS } from '../constants';
import axios from 'axios';
import { FETCH_USER } from './types';

export const fetchUser = () => {
    return function(dispatch) {
        axios
            .get('/api/current_user')
            .then(res => dispatch({ type: FETCH_USER, payload: res }));
    };
};

export const addReminder = (text, dueDate) => {
    const action = {
        type: ADD_REMINDER,
        text,
        dueDate
    }
    console.log('action in addReminder', action);
    return action;
}

export const deleteReminder = (id) => {
    const action = {
        type: DELETE_REMINDER,
        id
    }
    console.log('deleting in actions', action);
    return action;
}

export const clearReminders = () => {
    return {
        type: CLEAR_REMINDERS
    }
}