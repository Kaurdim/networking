import React from 'react';
import './EmployeeCart.css';


export const EmployeeCart = ({ employee, full }) => {
  return (
    <div className='employee-cart'>
      <div className='employee-avatar'>
        <img src={employee.picture.large} alt='avatar'></img>
      </div>
      <div className='employee-info'>
        <p className='info-field'>
          <span className='field-title'>Имя:</span> {employee.name}
        </p>
        <p className='info-field'>
          <span className='field-title'>Фамилия:</span> {employee.surname}
        </p>
        <p className='info-field'>
          <span className='field-title'>Должность:</span> {employee.position}
        </p>
        {full && <p className='info-field'>
          <span className='field-title'>Адресс:</span> {employee.address}
        </p>}
      </div>
    </div>
  );
}