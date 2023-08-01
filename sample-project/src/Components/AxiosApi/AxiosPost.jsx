import React, { Component } from 'react'

import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import axios from 'axios';

export default class AxiosPost extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         userName : "",
         userPassword : ""
      }
    }
    handleChange = (e) => {
        const {name, value} = e.target ;
        this.setState({
            [name] : value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
      axios.post("https://reqres.in/api/users",{
        
      })
    }
  render() {
    const {userName, userPassword} = this.state
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
        <TextField label="enter name" value={userName} onChange={this.handleChange} name='userName'/><br />
        <TextField type="password" label="enter password" value={userPassword} onChange={this.handleChange} name='userPassword'/>
        <Button  type="submit" variant="contained" color="primary">
        Primary
      </Button>
        </form>
      </div>
    )
  }
}
