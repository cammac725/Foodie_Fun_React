import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = props => {
  return (
    <div className='header'>
      <div className='logo'>
        <h3>Foodie Fun</h3>
      </div>
      <form className='search-form'>
        <input
          className='search-input'
          type='text'
          placeholder='Search'
          onKeyDown={props.searchMeals}
        />
      </form>

      <div className='links'>
        <NavLink to='/protected'>My Meals</NavLink>
        <NavLink to='/register'>Sign Up</NavLink>
        <NavLink to='/login'>Login</NavLink>
      </div>


    </div>
  )
}

export default Header
