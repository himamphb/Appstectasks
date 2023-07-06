import React, { Component } from 'react'
import './Contact.css'
import Delete from '../Delete/Delete';


export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      names: props.data,
      person: '',
      numbers:'',
      id:2
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
    const { person, names , numbers, id} = this.state;

    if (person.trim()) {
      this.setState({
        
        names: [...names, {id,user:person,number:numbers}],
        person: '',
        numbers:'',
        id:id + 1
      }); 
    }
    
  };
  deleteUser = (id) => {
    let filteredUser = this.state.names.filter((ele) => ele.id !== id);
    this.setState({names:filteredUser});
  }

  render() {
    const { names, person, numbers } = this.state;
  
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
       {
        names.map((val,index) =>{
          return <Delete key={index} keyId = {val.id} propsName = {val.user} propsNum = {val.number} funCall = {this.deleteUser}/>
        })
       }
        
       </div>
      </div>
      </>
     
    );
  }
}