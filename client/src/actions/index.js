import axios from 'axios';
import { FETCH_USER } from './types';
import { ADD_REMINDER, DELETE_REMINDER, CLEAR_REMINDERS } from '../constants';


export const fetchUser = () => async dispatch => {
    const res = await axios.get('/api/current_user');

    dispatch({ type: FETCH_USER, payload: res.data });
};


export const addReminder = (text, dueDate) => {
    const action = {
        type: ADD_REMINDER,
        text,
        dueDate
    };
    console.log('action in addReminder', action);
    return action;
};

export const deleteReminder = (id) => {
    const action = {
        type: DELETE_REMINDER,
        id
    };
    console.log('deleting in actions', action);
    return action;
};

export const clearReminders = () => {
    return {
        type: CLEAR_REMINDERS
    };
};