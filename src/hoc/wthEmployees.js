import React, { Component } from 'react';


export function wthEmployees(WrappedComponent) {
  return class extends Component {
    componentDidMount() {
      if (!this.props.employees.length)
        this.props.setEmployeesList();
    }

    render() {
      if (!this.props.fetchSuccess) {
        return (<p className='notify'>Ошибка при загрузке данных, попробуйте еще раз.</p>);
      }
      if (!this.props.employees.length) {
        return (<p className='notify'>Загрузка...</p>);
      }
      return <WrappedComponent {...this.props} />;
    }
  };
}