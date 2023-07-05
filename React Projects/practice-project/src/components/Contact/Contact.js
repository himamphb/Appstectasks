import React, { Component } from 'react'
import './Contact.css'


export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      names: props.data,
      person: '',
      numbers:''
    };
  }

  handleChange = (e) => {
    this.setState({ person: e.target.value});
    this.setState({ numbers: e.target.value});
  };

  handleChangeNum = (e) => {
    this.setState({ numbers: e.target.value});
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { person, names , numbers} = this.state;

    if (person.trim()) {
      this.setState({
        names: [...names, {user:person,number:numbers}],
        person: '',
        numbers:''
      }); 
    }
  };
  deleteUser = (e) => {
    console.log(e.target);
  }

  render() {
    const { names, person, numbers } = this.state;
   
    const name = names.map((val, index) => <li key={index}>{val.user}</li>);
    const number = names.map((val, index) => <li key={index}>{val.number}</li>);
    return (
      <>
       <div className="contactForm">
        <h2>Contact Manager</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            className="Input-text"
            onChange={this.handleChange}
            value={person}
            placeholder="Enter name"
          /><br/>
          <input type="number" className="Input-text" onChange={this.handleChangeNum} placeholder="Enter number" value={numbers}/>
          <input type="submit" className="submit" value="Add" />
        </form>
        <hr />
       <div className='divContainer'>
       <ul>{name}</ul>
       <ul>{number}</ul>
       <ul>
       <button id='delBtn' onClick={this.deleteUser}>Delete</button>
       </ul>
       </div>
      </div>
      </>
     
    );
  }
}