import React, { Component } from "react";
import { Navigate } from "react-router-dom";
import { login } from "../module/api";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      errorEmail: "",
      errorPassword: "",
    };

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.clearFormData();
  }

  clearFormData() {
    this.formData = {
      email: "",
      password: "",
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
    
    console.log(this.validate());
    if (this.validate()) {
      const result = await login(this.formData.email, this.formData.password);     
      console.log("result = ",result);
      if (typeof result !== "object") {
        this.showErrorMessage(result);
      }
    }
  }

  resetErrorMessages() {
    this.setState((state) => ({
      errorEmail: "",
      errorPassword: "",
    }));
  }

  validate() {
    this.resetErrorMessages();
    if (!this.formData.email) {
      this.setState((state) => ({
        errorEmail: "Адрес электронной почты не указан",
      }));
      return false;
    }
    if (!this.formData.password) {
      this.setState((state) => ({
        errorPassword: "Пароль не указан",
      }));
      return false;
    }
    return true;
  }

  showErrorMessage(code) {
    this.resetErrorMessages();
    if (code === "auth/email-already-in-use") {
      this.setState((state) => ({
        errorEmail: "Поле почты пустое",
      }));
    } else if (code === "") {
      this.setState((state) => ({
        errorPassword: "Пароль пустой",
      }));
    }
    else if (code === "auth/user-not-found") {
      this.setState((state) => ({
        errorEmail: "Такой почты не существует",
      }));
    }
    else if (code === "auth/wrong-password") {
      this.setState((state) => ({
        errorPassword: "Неверный пароль",
      }));
    }
  }

  auth() {
    const auth = getAuth();
    signInWithEmailAndPassword(
      auth,
      this.formData.email,
      this.formData.password
    )
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("user", user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
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
              {this.state.errorEmail && (
                <p className="help is-danger">{this.state.errorEmail}</p>
              )}
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
              {this.state.errorPassword && (
                <p className="help is-danger">{this.state.errorPassword}</p>
              )}
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
