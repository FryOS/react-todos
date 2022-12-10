import React, { Component } from "react";
import { Navigate } from "react-router-dom";

export default class TodoAdd extends Component {
  constructor(props) {
    super(props);
    this.state = { redirect: false };
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleDescChange = this.handleDescChange.bind(this);
    this.handleImageChange = this.handleImageChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.clearFormData();
  }

  clearFormData() {
    this.formData = {
      title: "",
      desc: "",
      image: "",
    };
  }

  handleTitleChange(e) {
    this.formData.title = e.target.value;
  }
  handleDescChange(e) {
    this.formData.desc = e.target.value;
  }
  handleImageChange(e) {
    const files = e.target.files;
    if (files.length > 0) {
      const fileReader = new FileReader();
      const that = this;
      fileReader.onload = () => {
        that.formData.image = fileReader.result;
      };
      fileReader.readAsDataURL(files[0]);
    } else {
      this.formData.image = "";
    }
  }
  handleFormSubmit(e) {
    e.preventDefault();
    const newDeed = { ...this.formData };
    const date = new Date();
    newDeed.done = false;
    newDeed.createdAt = date.toLocaleString();
    newDeed.key = date.getTime();
    this.props.add(newDeed);
    // const data =  this.clearFormData();
    // console.log("data", data)
    // console.log("newDeed", newDeed);
    // e.target.reset();
    this.setState((state) => ({ redirect: true }));
  }

  render() {
    if (this.state.redirect) {
      return <Navigate to="/" />;
    } else {
      return (
        <section>
          <h1>Создание нового дела</h1>
          <form onSubmit={this.handleFormSubmit}>
            <div className="field">
              <label className="label">Заголовок</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="Text input"
                  onChange={(event) => this.handleTitleChange(event)}
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Примечание</label>
              <div className="control">
                <textarea
                  className="textarea"
                  placeholder="Textarea"
                  onChange={(event) => this.handleDescChange(event)}
                ></textarea>
              </div>
            </div>
            <div className="field">
              <div className="file">
                <label className="file-label">
                  <input
                    className="file-input"
                    type="file"
                    accept="image/*"
                    onChange={this.handleImageChange}
                    placeholder="Text input"
                  />
                  <span className="file-cta">
                    <span className="file-label">Графическая иллюстрация</span>
                  </span>
                </label>
              </div>
            </div>
            <div className="field is-grouped is-grouped-right">
              <div className="control">
                <input
                  className="button is-link is-primary"
                  type="reset"
                  placeholder="Text input"
                  value="Сброс"
                />
              </div>

              <div className="control">
                <input
                  className="button is-primary"
                  type="submit"
                  placeholder="Text input"
                  value="Создать дело"
                />
              </div>
            </div>
          </form>
        </section>
      );
    }
  }
}
