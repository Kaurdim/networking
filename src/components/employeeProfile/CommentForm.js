import React, { Component } from 'react';
import InputMask from 'react-input-mask';
import './CommentForm.css';


export class CommentForm extends Component {
  state = {
    title: '',
    phoneNumber: '',
    commentBody: '',
    isTitleValid: true,
    isPhoneNumberValid: true,
    isCommentBodyValid: true
  }

  render() {
    const { 
      title, 
      phoneNumber, 
      commentBody, 
      isTitleValid,
      isPhoneNumberValid, 
      isCommentBodyValid 
    } = this.state;
    const isFormValid = isTitleValid && isPhoneNumberValid && isCommentBodyValid;
    return (
      <div className='comment-form-container'>
        <h2 className='form-header'>Напишите сотруднику комментарий</h2>
        <form className='commnet-form' onSubmit={this.addComment}>
          <input 
            type='text'
            value={title}
            placeholder='Заголовок'
            name='title'
            required
            onChange={this.handleChange}
            className={'comment-form-field ' + (!isTitleValid ? 'valid-error' : '')}
            onBlur={this.validateTitle} />
          {!isTitleValid && <span className='error-notify'>
            Заголовок должен быть не менее 5 символов и не более 80.</span>}
          <InputMask 
            value={phoneNumber}
            onChange={this.handleChange}
            placeholder='Ваш номер телефона'
            required
            name='phoneNumber'
            mask="+7\(999) 999 99 99" 
            maskChar=" "
            className={'comment-form-field ' + (!isPhoneNumberValid ? 'valid-error' : '')}
            onBlur={this.validatePhoneNumber} />
          {!isPhoneNumberValid && <span className='error-notify'>
            Укажите ваш номер телефона.</span>}
          <textarea
            value={commentBody}
            placeholder='Комментарий'
            name='commentBody'
            required
            onChange={this.handleChange}
            onBlur={this.validateCommentBody}
            className={'comment-form-field textarea ' + (!isCommentBodyValid ? 'valid-error' : '')}
          >
          </textarea>
          {!isCommentBodyValid && <span className='error-notify'>
            Напишите комментарий.</span>}
          <button
            className='comment-form-btn'
            disabled={!isFormValid}
          >
            Добавить
        </button>
        </form>
      </div>
    );
  }

  handleChange = (event) => {
    this.setState({ 
      [event.target.name]: event.target.value });
  }

  validateTitle = () => {
    const title = this.state.title.trim();
    if (!title || title.length < 5 || title.length > 80) {
      this.setState({isTitleValid: false})
      return;
    }
    this.setState({isTitleValid: true});
  }

  validatePhoneNumber = () => {
    if (this.state.phoneNumber.trim().length < 17) {
      this.setState({ isPhoneNumberValid: false })
      return;
    }
    this.setState({ isPhoneNumberValid: true });
  }

  validateCommentBody = () => {
    const comment = this.state.commentBody.trim();
    if (!comment || comment.length > 128) {
      this.setState({ isCommentBodyValid: false })
      return;
    }
    this.setState({ isCommentBodyValid: true });
  }

  reset () {
    this.setState({
      title: '',
      phoneNumber: '',
      commentBody: ''
    });
  }

  addComment = (event) => {
    event.preventDefault();
    this.props.commentProfile({
      title: this.state.title,
      phoneNumber: this.state.phoneNumber,
      commentBody: this.state.commentBody
    })
    this.reset();
  }
}