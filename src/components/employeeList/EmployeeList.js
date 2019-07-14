import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { EmployeeCart } from '../common/EmployeeCart';
import { setEmployeesList } from '../../actions/employeesActions';
import { wthEmployees } from '../../hoc/wthEmployees';
import './EmployeeList.css';


export class EmployeeList extends Component { 
  render () {
    const { employees } = this.props;
    return (
      <div className='employee-list-container'>
        <ul className='employee-list'>
          {employees.map(emp => (
            <li className='employee-list-item' key={emp.name + emp.surname}>
              <Link to={`/employee-profile/${emp.id}`}>
                <EmployeeCart employee={emp}/>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = ({ employees, fetchSuccess }) => {
  return {
    employees,
    fetchSuccess
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setEmployeesList: () => dispatch(setEmployeesList()),
  }
}

EmployeeList = connect(mapStateToProps, mapDispatchToProps)(wthEmployees(EmployeeList));