import React, { Component } from 'react';
import {Formik, Form, Field, ErrorMessage} from "formik";
import './Formik.scss'

export default class FormikLibrary extends Component {
    constructor(props) { 
        super(props); 
        this.initialValue = {
            name : "",
            email : "",
            password : ""
        }
        
     } 
     validate = (values) => {
        const errors = {};
        if (!values.name) {
            errors.name = 'Required';
         }
         if (!values.email) {
            errors.email = 'Required';
         }
         if (!values.password) {
            errors.password = 'Required';
         }
         return errors;
     }
     handleSubmit = values => console.log(values);
  render() {
    return (
     <Formik
     initialValues={this.initialValue}
     validate={(values) => {this.validate(values)}}
     onSubmit={(values) => {this.handleSubmit(values)}}
     >
        <Form>
            <div className="form-control">
                <label htmlFor="name">Name</label>
                <Field type="text" id="name" name="name" />
                <ErrorMessage name='name' component="div"/>
            </div>
            <div className="form-control">
                <label htmlFor="email">Email</label>
                <Field type="email" id="email" name="email" />
                <ErrorMessage name='email' component="div"/>
            </div>
            <div className="form-control">
                <label htmlFor="password">Password</label>
                <Field type="password" id="password" name="password" />
                <ErrorMessage name='password' component="div"/>
            </div>
            <button type='submit'>submit</button>
        </Form>
     </Formik>
    )
  }
}
