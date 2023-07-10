import React, { Component } from "react";
import "./Todolist.scss";
export default class Todolist extends Component {
  constructor() {
    super();
    this.state = {
      taskList: [],
      date: "",
      task: "",
      id: 0,
      isChecked: false,
      listFiltered: [],
    };
  }
  handleChange = (value) => {
    this.setState({
      task: value,
    });
  };
  handleDate = (value) => {
    this.setState({
      date: value,
    });
  };
  handleAddTask = () => {
    const { id } = this.state;
    const objTask = {
      id: id,
      task: this.state.task,
      date: this.state.date,
    };
    if (this.state.date !== "" && this.state.task !== "") {
      this.setState({
        taskList: this.state.taskList.concat(objTask),
        task: "",
        date: "",
        id: id + 1,
      });
    }
  };
  deleteTask = (index) => {
    this.setState({
      taskList: [...this.state.taskList].filter((val) => val.id !== index),
    });
  };
  toggleCheckbox = () => {
    this.setState((state) => ({ isChecked: !state.isChecked }));
  };
  handleDropDown = (value) => {
    console.log(value);
    if (value === "all") {
      this.setState({
        listFiltered: [...this.state.taskList],
      });
    }
    if (value === "completed"){
      this.setState({listFiltered: [...this.state.taskList].filter((val) => val.isChecked === false)});
    }
    if (value === "incomplete"){
      this.setState({ listFiltered: [...this.state.taskList].filter((val) => val.isChecked === true)});
    }
  };
  render() {
    const myList = this.state.taskList.map((ele, index) => {
      return (
        <li key={index}>
          {ele.task}
          {ele.date}
          <input
            type="checkbox"
            defaultChecked={this.state.isChecked}
            onChange={this.toggleCheckbox}
          />
          <button
            onClick={() => {
              this.deleteTask(ele.id);
            }}
          >
            Delete
          </button>
        </li>
      );
    });
    return (
      <>
        <div className="mainContainer">
          <h1>Todolist</h1>
          <input
            type="text"
            value={this.state.task}
            onChange={(e) => {this.handleChange(e.target.value);}}
          />
          <input
            type="date"
            value={this.state.date}
            onChange={(e) => {
              this.handleDate(e.target.value);
            }}
          />
          <button onClick={this.handleAddTask}>Add task</button>
        </div>
        <div className="container">
          <div>
            <select
              onChange={(e) => {
                this.handleDropDown(e.target.value);
              }}
            >
              <option value="all">all</option>
              <option value="completed">Completed</option>
              <option value="incomplete">Incomplete</option>
            </select>
          </div>

          <div>
            <ul>{myList}</ul>
          </div>
        </div>
      </>
    );
  }
}
