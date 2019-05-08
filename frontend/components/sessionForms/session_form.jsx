import React from 'react';
import { withRouter } from 'react-router-dom';


class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      email: '', 
      password: '',
      fname: '',
      lname: '',
      display_name: '',
      gender: '',  
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
  }
  update(field){
    return e => this.setState({ [field]: e.target.value });
  }
  componentDidMount() {
    console.log('I\'m alive');
  }
  demoLogin(e) {
    e.preventDefault();
    const demoUser = {email: 'demo@email.com', password:'hunter2'};
    if (this.props.formType === 'login'){
      this.props.processForm(demoUser).then(this.props.closeModal);
    } else {
      this.props.demoLogin(demoUser).then(this.props.closeModal);
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    let user;
    if (this.props.formType === 'signup'){
      user = Object.assign({}, this.state);
    } else {
      user = Object.assign({}, {email: this.state.email}, {password: this.state.password});
    }
    this.props.processForm(user).then(this.props.closeModal);
  }
  renderErrors() {
      return this.props.errors.map((error, i) => {
        return (
            <li key={ `error-${i}` } style={{listStyleType: 'none', color: 'red', textAlign: 'center'}}>
              { error }
            </li>
        );
      });
  }
  render() {
    let button, demoLog;                      
    button = this.props.otherForm;
    demoLog = <button id="demo" className="session-submit-demo" onClick={this.demoLogin}>Demo Log In</button>;



    if (this.props.formType === 'signup'){
      return (
        <div className="login-form-container">
          <form onSubmit={this.handleSubmit} className="login-form-box">
            <br />
            <h1 className="cred-sign">Sign Up</h1>
            <br />
            { this.renderErrors() }
            <br />
            <div className="login-form">
              <br />
              <input type="text"
                placeholder="First Name"
                id="fname"
                value={ this.state.fname }
                onChange={ this.update('fname') }
                className="login-input"
              />
              <input type="text"
                placeholder = "Last Name"
                id="lname"
                value={ this.state.lname }
                onChange={ this.update('lname') }
                className="login-input"
              />
              <br /> 
              <br /> 
              <input type="email"
                placeholder = "Email"
                id="email"
                value={ this.state.email }
                onChange={ this.update('email') }
                className="login-input"
              />
              <br />
              <br />
              <input type="password"
                placeholder = "Password"
                id="password"
                value={ this.state.password }
                onChange={ this.update('password') }
                className="login-input"
              />
              <br />
              <br />
              <input type="text"
                placeholder = "Display Name"
                id="displayname"
                value={ this.state.display_name }
                onChange={ this.update('display_name') }
                className="login-input"
              />
              <br /> 
              <br /> 
              <input type="text"
                placeholder = "Gender: Optional"
                id="gender"
                value={ this.state.gender }
                onChange={ this.update('gender') }
                className="login-input"
              />
              <br />
              <br />
              <input className="session-submit" type="submit" value={this.props.formType} />
            </div>
            <h1 className="cred-sign-link">Already have an account? <span className="link-btn" onClick={this.props.clearModalErrors}>{button}</span></h1>
            <br />
          </form>
        </div>
      );
    } else {
      return (
        <div className="login-form-container">
          <form onSubmit={this.handleSubmit} className="login-form-box">
            <br />
            <h1 className="cred-sign">
            <br />
              Log In
            <br />
            </h1>
            { this.renderErrors() }
            <div className="login-form">
              <br />
              <input type="email"
                placeholder = "Email"
                id="login-email"
                value={ this.state.email }
                onChange={ this.update('email') }
                className="login-input"
              />
              <br />
              <br />
              <input type="password"
                placeholder = "Password"
                id="login-password"
                value={ this.state.password }
                onChange={ this.update('password') }
                className="login-input"
              />
              <br />
              <br />
              <input className="session-submit" type="submit" value={this.props.formType} />
            </div>
            <h1 className="cred-sign-link">Don 't have an account? <span className ="link-btn" onClick={this.props.clearModalErrors}>{button}</span></h1>
            <br />
            {demoLog}
          </form>
        </div>
      );

    }
  }
}

export default withRouter(SessionForm);