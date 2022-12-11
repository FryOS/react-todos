import React, { Component } from "react";
import { Navigate } from "react-router-dom";
import { login } from "../module/api";

class Login extends Component {
  constructor(props) {
    super(props);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.clearFormData();
  }

  clearFormData() {
    this.formData = {
      email: "",
      password: ""
    };
  }

  handleEmailChange(e) {
    this.formData.email = e.target.value;
  }
  handlePasswordChange(e) {
    this.formData.password = e.target.value;
  }

  async handleFormSubmit(e) {
    e.preventDefault();
    const result = await login(this.formData.email, this.formData.password);
    if (typeof result !== "object") {
      console.log(result);
    }
  }

  render() {
    if (this.props.currentUser) {
      return <Navigate to="/" replace />;
    } else {
      return (
        <section>
          <h1>Вход</h1>
          <form onSubmit={this.handleFormSubmit}>
            <div className="field">
              <label className="label">Email</label>
              <div className="control">
                <input
                  type="email"
                  className="input"
                  onChange={this.handleEmailChange}
                />
              </div>
            </div>

            <div className="field">
              <label className="label">Password</label>
              <div className="control">
                <input
                  type="password"
                  className="input"
                  onChange={this.handlePasswordChange}
                />
              </div>
            </div>

            <div className="field is-grouped is-grouped-right">
              <div className="control">
                <input
                  className="button is-primary"
                  type="submit"
                  placeholder="Text input"
                  value="Войти"
                />
              </div>
            </div>
          </form>
        </section>
      );
    }
  }
}

export default Login;
