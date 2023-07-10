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
    const { id, task, date, taskList } = this.state;
    const objTask = {
      id: id,
      task: task,
      date: date,
      isChecked: false,
    };
    if (date !== "" && task !== "") {
      this.setState({
        taskList: [...taskList, objTask],
        listFilterd: [...taskList, objTask],
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
  toggleCheckbox = (val, id) => {
    let userId = this.state.taskList.findIndex((item) => item.id === id);
    let copiedArr = [...this.state.taskList];
    copiedArr[userId] = { ...copiedArr[userId], isChecked: val };
    this.setState({ taskList: copiedArr, listFilterd: copiedArr });
  };
  handleDropDown = (value) => {
    if (value === "all") {
      this.setState({
        listFiltered: [...this.state.taskList],
      });
    }
    if (value === "completed") {
      this.setState({
        listFiltered: this.state.taskList.filter(
          (val) => val.isChecked === false
        ),
      });
    }
    if (value === "incomplete") {
      this.setState({
        listFiltered: this.state.taskList.filter(
          (val) => val.isChecked === true
        ),
      });
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
            checked={this.state.isChecked}
            onChange={(e) => {
              this.toggleCheckbox(e.target.checked, ele.id);
            }}
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
            onChange={(e) => {
              this.handleChange(e.target.value);
            }}
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
