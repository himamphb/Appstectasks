import React, { Component } from "react";
import { connect } from "react-redux";
import { addForm } from "../../redux/action";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "../ReactForms/Formik.scss";
import * as Yup from "yup";

const validateForm = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  password: Yup.string().required("Password is required"),
});

class FormAxios extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      password: "",
    };
  }

  handleSubmit = async (values) => {
    const obj = {
      name: values.name,
      password: values.password,
    };

   await axios
      .post("https://reqres.in/api/users/data", {
        obj,
      })
      .then((obj) => {
        this.props.addForm(obj.data.obj);
        console.log(obj);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  render() {
    return (
      <div className="parent">
        <Formik
          initialValues={{ name: "", password: "" }}
          validationSchema={validateForm}
          onSubmit={(val) => {
            this.handleSubmit(val);
            val.name = "";
            val.password = "";
          }}
        >
          <Form>
            <div className="form-control">
              <label htmlFor="name">Name</label>
              <Field type="text" id="name" name="name" />
              <ErrorMessage name="name" className="error" component="div" />
            </div>
            <div className="form-control">
              <label htmlFor="password">Password</label>
              <Field type="password" id="password" name="password" />
              <ErrorMessage name="password" className="error" component="div" />
            </div>
            <button type="submit">submit</button>
          </Form>
        </Formik>
      </div>
    );
  }
}
export default connect(null, { addForm })(FormAxios);
