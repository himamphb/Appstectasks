import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteContact } from "../../redux/action";
import "./Contact.scss";
class ContactReduxLists extends Component {
  handleDelete = (id) => {
    this.props.deleteContact(id);
  };
  render() {
    return (
      <div className="parent">
        <ul>
          {this.props.contact.map((ele) => (
            <li key={ele.id} className="list">
              <div className="divContainer">
                <p>{ele.userName}</p>
                <p>{ele.userEmail}</p>
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
        </ul>
      </div>
    );
  }
}

const stateData = (state) => ({
  contact: state.contact,
});
export default connect(stateData, { deleteContact })(ContactReduxLists);
