import React, { Component } from 'react'
import { connect } from "react-redux";
import { addContact, addEmail } from '../../redux/action';
import './Contact.scss'
class ContactRedux extends Component {
    constructor(props) {
      super(props);
      this.state = {
        userName : "",
        userEmail : ''
      }
    }
    handleContacterDetails = (e) => {
        const {name, value} = e.target
        this.setState({
            [name] : value
        })
    }
    handleSubmit = (e) => {

        e.preventDefault();
        const idValue = Date.now()
        const newContact = {
            userName : this.state.userName,
            id: idValue
        }
        const newEmail = {
          userEmail : this.state.userEmail,
          id: idValue
        }

        this.props.addContact(newContact)
        this.props.addEmail(newEmail)
        this.setState({
            userEmail:"",
            userName: ""
        })
        
    }
  render() {
    return (
      <div className="contactForm">
        <h2>Contact Manager</h2>
        <form>
        <input  className="Input-text" type="text" value={this.state.userName} onChange={this.handleContacterDetails} name='userName'/>
        
        <br /><input className="Input-text" type="email" value={this.state.userEmail} onChange={this.handleContacterDetails} name='userEmail'/>
        <button className="submit" type='submit' onClick={this.handleSubmit}>submit</button>
        </form>
      </div>
    )
  }
}
export default connect(null,{addContact,addEmail})(ContactRedux)