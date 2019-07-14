import React from 'react';
import { NavLink } from 'react-router-dom';
import './AppHeader.css';

export const AppHeader = () => {
  return (
    <header className="app-header">
      <h1 className='app-caption'>NetWotking</h1>
      <nav className='app-navigation'>
        <NavLink to='/' className='app-header-link'>На главную</NavLink>
      </nav>
    </header>
  );
}