import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

import { EmployeeCart } from '../common/EmployeeCart';
import { Comments } from './Comments';
import { CommentForm } from './CommentForm';
import { AvatarCarusel } from './AvatarCarusel';
import {
  setEmployeesList, setCurrentEmployeeAction
} from '../../actions/employeesActions';
import { addCommentAction } from '../../actions/commentActions';
import { wthEmployees } from '../../hoc/wthEmployees';
import './EmployeeProfile.css';


export class EmployeeProfile extends Component {
  componentDidMount () {
    const id = this.props.match.params.id;
    this.setCurrentEmployee(id);
  }

  render() {
    const caruselData = this.props.employees.map(e => ({
      id: e.id,
      avatar: e.picture.medium
    }))
    const commentsForEmploee = this.props.comments
      .filter(c => c.employeeId === this.props.currentEmployee.id)
      .sort((a, b) => b.time - a.time).slice(0, 4);
    return (
      <>
        <AvatarCarusel employees={caruselData} selcetEmlpoyee={this.setCurrentEmployee}/>
        <div className='employee-profile'>
          {this.renderProfile(this.props.currentEmployee, commentsForEmploee)}
        </div>
      </>
    );
  }

  commentProfile = (comment) => {
    comment = {
      ...comment,
      employeeId: this.props.currentEmployee.id,
      time: moment().unix()
    }
    this.props.addComment(comment);
  }

  setCurrentEmployee = (id) => {
    const employee = this.props.employees.find(e => e.id === +id);
    if (employee) {
      this.props.setCurrentEmployeeAction(employee);
      this.props.history.push(`/employee-profile/${id}`);
    }
  }

  renderProfile = (employee, comments) => {
    if (!employee) {
      return (
        <p>Нет такого пользователя</p>
      )
    }
    return (
      <>
        <EmployeeCart full employee={employee} />
        {comments.length ? <Comments comments={comments}/> : null}
        <CommentForm commentProfile={this.commentProfile}/>
      </>
    )
  }
}

const mapStateToProps = ({ 
  employees, comments, currentEmployee, fetchSuccess }) => {
  return {
    employees,
    comments,
    currentEmployee,
    fetchSuccess
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setEmployeesList: () => dispatch(setEmployeesList()),
    addComment: (comment) => dispatch(addCommentAction(comment)),
    setCurrentEmployeeAction: (employee) => dispatch(setCurrentEmployeeAction(employee))
  }
}

EmployeeProfile = connect(mapStateToProps, mapDispatchToProps)(wthEmployees(EmployeeProfile));