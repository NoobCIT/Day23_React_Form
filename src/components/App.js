import React, { Component } from 'react';

function FirstPage(props) {
  return (
    <div className='form-container'>
      <h1>Simple Form Using React</h1>

      <form onSubmit={props.handleFirstPageSubmit}>
        <div className='form-group'>
          <label htmlFor='firstname'>First Name</label>
          <input type='text' id='firstname'></input>
        </div>

        <div className='form-group'>
          <label htmlFor='lastname'>Last Name</label>
          <input type='text' id='lastname'></input>
        </div>

        <div className='form-group'>
          <button>Next</button>
        </div>
      </form>

    </div>
  )
}

function SecondPage(props) {
  return (
    <div className='form-container'>
      <h1>Simple Form Using React</h1>

      <form onSubmit={props.handleSecondPageSubmit}>
        <div className='form-group'>
          <label htmlFor='birthday'>Birthday Year</label>
          <input type='text' id='birthday'></input>
        </div>

        <div className='form-group'>
          <label htmlFor='hometown'>Where Are You From</label>
          <input type='text' id='hometown'></input>
        </div>

        <div className='form-group'>
          <button>Next</button>
        </div>
      </form>

    </div>
  )
}

function ThirdPage(props) {
  return (
    <div className='form-container'>
      <h3>Hello {' ' + props.firstname + ' ' + props.lastname}</h3>
      <h3>You are from {' ' + props.hometown}</h3>
      <h3>You are born in {' ' + props.birthday}</h3>

      <div className='form-group'>
        <button onClick={props.handleResetForm}>Reset Form</button>
      </div>
    </div>
  )
}

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      firstname: '',
      lastname: '',
      birthday: '',
      hometown: '',
      firstPage: true,
      secondPage: false,
      thirdPage: false,
    }

    this.handleFirstPageSubmit = this.handleFirstPageSubmit.bind(this);
    this.handleSecondPageSubmit = this.handleSecondPageSubmit.bind(this);
    this.handleResetForm = this.handleResetForm.bind(this);
  }

  handleFirstPageSubmit(event) {
    event.preventDefault();
    let firstname = event.target.firstname.value;
    let lastname = event.target.lastname.value;
    if (firstname === '' && lastname === '') {
      firstname = 'No';
      lastname = 'Name';
    }
    this.setState({
      firstname: firstname,
      lastname: lastname,
      firstPage: false,
      secondPage: true,
    })
  }

  handleSecondPageSubmit(event) {
    event.preventDefault();
    let birthday = event.target.birthday.value;
    let hometown = event.target.hometown.value;
    if (birthday === '') {
      birthday = '...wait nvm birthdayless!';
    }
    if (hometown === '') {
      hometown = 'no where...'
    }
    this.setState({
      birthday: birthday,
      hometown: hometown,
      secondPage: false,
      thirdPage: true,
    })
  }

  handleResetForm() {
    this.setState({
      firstname: '',
      lastname: '',
      birthday: '',
      hometown: '',
      firstPage: true,
      thirdPage: false,
    })
  }

  render() {
    return (
      <div>
        {this.state.firstPage === true ? <FirstPage
          handleFirstPageSubmit={this.handleFirstPageSubmit}/> : null}
        {this.state.secondPage === true ? <SecondPage
          handleSecondPageSubmit={this.handleSecondPageSubmit}/> : null}
        {this.state.thirdPage === true ? <ThirdPage
          firstname={this.state.firstname}
          lastname={this.state.lastname}
          birthday={this.state.birthday}
          hometown={this.state.hometown}
          handleResetForm={this.handleResetForm} /> : null}
      </div>
    );
  }
}

export default App;
