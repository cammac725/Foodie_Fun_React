import axios from 'axios';

export const LOADING = 'LOADING';
export const ERROR = 'ERROR';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const FETCH_MEALS_SUCCESS = 'FETCH_MEALS_SUCCESS';
export const ADD_MEAL_SUCCESS = 'ADD_MEAL_SUCCESS';
export const DELETE_MEAL_SUCCESS = 'DELETE_MEAL_SUCCESS';

export const login = credentials => dispatch => {
  dispatch({ type: LOADING });
  return axios
    .post('https://backend-foodie-fun.herokuapp.com/api/auth/login', credentials)
    .then(res => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data
      })
    })
    .catch(err => dispatch({
      type: ERROR,
      payload: err.response
    }))
}

export const getMeals = () => dispatch => {
  dispatch({ type: LOADING });
  axios
    .get('https://backend-foodie-fun.herokuapp.com/api/meals', {
      headers: {
        Authorization: localStorage.getItem('token')
      }
    })
    .then(res => dispatch({
      type: FETCH_MEALS_SUCCESS,
      payload: res.data
    }))
    .catch(err => dispatch({
      type: ERROR,
      payload: err.response
    }))
}

export const register = newUser => dispatch => {
  dispatch({ type: LOADING });
  return axios
    .post('https://backend-foodie-fun.herokuapp.com/api/auth/register', newUser)
    .then(res => dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data
    }))
    .catch(err => dispatch({
      type: ERROR,
      payload: err.response
    }))
}

export const addMeal = newMeal => dispatch => {
  dispatch({ type: LOADING });
  return axios
    .post('https://backend-foodie-fun.herokuapp.com/api/meals', newMeal)
    .then(res => dispatch({
      type: ADD_MEAL_SUCCESS,
      payload: res.data
    }))
    .catch(err => dispatch({
      type: ERROR,
      payload: err.response
    }))
}

export const deleteMeal = id => dispatch => {
  dispatch({ type: LOADING });
  return axios
    .delete(`https://backend-foodie-fun.herokuapp.com/api/meals/${id}`)
    .then(res => dispatch({
      type: DELETE_MEAL_SUCCESS,
      payload: res.data
    }))
    .catch(err => dispatch({
      type: ERROR,
      payload: err.response
    }))
}

