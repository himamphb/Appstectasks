import React, { Component } from "react";
import { connect } from "react-redux";
import { addForm } from "../../redux/action";
import axios from "axios";

class FormAxios extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      password: "",
    };
  }
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };
  handleSubmit = async (e) => {
    e.preventDefault();
    const obj = {
      name: this.state.name,
      password: this.state.password,
    };

     axios
      .post("https://reqres.in/api/users", {
        obj,
      })
      .then((obj) => {
        this.props.addForm(obj.data.obj);
        // console.log(obj);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  render() {
    
    const { name, password } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
          />
          <input
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
          />
          <button type="submit">submit</button>
        </form>
      </div>
    );
  }
}
export default connect(null, { addForm })(FormAxios);
