import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteContact } from "../../redux/action";

import "./Contact.scss";
import {
  nameCount,
  selectContact,
  emailCount,
  selectEmail,
} from "../../redux/selector";
class ContactReduxLists extends Component {
  handleDelete = (id) => {
    this.props.deleteContact(id);
  };
  render() {
    console.log(this.props);
    return (
      <div className="parent">
        <ul style={{display:"flex",width:"500px"}}>
          <div style={{width:"50%"}}>
          {this.props.contact.map((ele, index) => (
            <li key={index} style={{border:"1px solid #fff",height:"2.5rem",width:"100%"}}>
              <p>{ele}</p>
            </li>
          ))}
          </div>
          <div style={{width:"50%"}}>
          {this.props.email.map((ele, index) => (
            <li key={index} style={{border:"1px solid #fff",height:"2.5rem",width:"100%"}}>
              <p>{ele}</p>
            </li>
          ))}
          </div>
          
        </ul>
        <span>nameCount : {this.props.nameLength}</span>
          <span>emailCount : {this.props.emailLength}</span>
      </div>
    );
  }
}

const stateData = (state) => ({
  contact: selectContact(state),
  email: selectEmail(state),
  nameLength: nameCount(state),
  emailLength: emailCount(state),
});
export default connect(stateData, { deleteContact })(ContactReduxLists);
