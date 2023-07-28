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
    // console.log(this.props.contact);
    return (
      <div className="parent">
        <ul>
          {this.props.contact.map((ele) => (
            <li key={ele.id}>
              <span>nameCount : {this.props.nameLength}</span>

              <div className="divContainer">
                <p>{ele.userName}</p>

                <button
                  type="button"
                  onClick={() => {
                    this.handleDelete(ele.id);
                  }}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
          {this.props.email.map((ele) => (
            
              <li key={ele.id}>
                <span>emailCount : {this.props.emailLength}</span>
                <div>
                <p>{ele.userEmail}</p>
                </div>
              </li>
            
          ))}
        </ul>
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
