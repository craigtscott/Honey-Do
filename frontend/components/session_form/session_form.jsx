
import React from 'react';
import { Link, withRouter  } from 'react-router';

class sessionForm extends React.Component {
  constructor(props){
    super(props);
    this.state = { user_name: "", password: "" };
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  redirectIfLoggedIn() {
		if (this.props.loggedIn) {
			this.props.router.push("/");
		}
	}

  navLink() {
		if (this.props.formType === "login") {
			return <Link to="/signup">sign up instead</Link>;
		} else {
			return <Link to="/login">log in instead</Link>;
		}
	}




  render() {

    let submitText, fName, lName;

    if(this.props.formType === "login"){
      submitText = "Login";
    } else {
      submitText = "Signup";
      fName = <input type="text"
                      value={this.state.first_name}
                      onChange={this.update("first_name")}
                      className="login-input"
                      placeholder="First Name" />;
      lName = <input type="text"
                      value={this.state.last_name}
                      onChange={this.update("last_name")}
                      className="login-input"
                      placeholder="Last Name" />;
    }

    return(
      <div className="login-page">
        <div className="login-form-container">
          <form onSubmit={this.handleSubmit} className="login-form-box">
            { fName }
            <br/>
            { lName }
            <br/>
            <input type="text"
                    value={this.state.user_name}
                    onChange={this.update("user_name")}
                    className="login-input"
                    placeholder="Username" />
            <br/>
            <input type="password"
                    value={this.state.password}
                    onChange={this.update("password")}
                    className="login-input"
                    placeholder="Password"/>
            <br/>
            <input type="submit" className="login-button" value={submitText} />
          </form>
        </div>
      </div>
    );
  }
}
export default withRouter(sessionForm);
