
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
    // this.props.router.push("/dash");
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

  renderErrors() {
    if (this.props.errors){
      return(
        <ul>
          {this.props.errors.map((error, i) => (
            <li key={`error-${i}`}>
              {error}
            </li>
          ))}
        </ul>
      );
    }
	}

  navLink() {
		if (this.props.formType === "login") {
			return <Link to="/signup">sign up</Link>;
		} else {
			return <Link to="/login">log in</Link>;
		}
	}




  render() {

    let submitText, fName, lName, other;

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
          <div className="redirect">
            {this.navLink()}
          </div>
          <div className="login-comb-div">
            <Link to="/">
            <img className="login-comb" src="assets/comb.png" alt="Honey Comb" />
            </Link>
          </div>
          {this.renderErrors()}
        </div>
      </div>
    );
  }
}
export default withRouter(sessionForm);
