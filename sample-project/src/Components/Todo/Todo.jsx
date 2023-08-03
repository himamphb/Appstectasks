import React, { Component } from "react";

export default class Todo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      task: [],
      taskInput: "",
      view: false,
    };
  }
  handleChange = (e) => {
    this.setState({
      taskInput: e.target.value,
    });
  };
  handleSubmit = () => {
    const obj = {
      taskName: this.state.taskInput,
    };
    this.setState({
      view: true,
      task: [...this.state.task, obj],
    });
  };
  render() {
    const mylist = this.state.task.map((todo) => <li>{todo.taskName}</li>);
    return (
      <>
        <div>
          <input
            type="text"
            value={this.state.taskInput}
            onChange={this.handleChange}
            name="taskInput"
          />
          <button type="button" onClick={this.handleSubmit}>
            submit task
          </button>
        </div>
        {this.state.view ? (
          <div>
            <ul>{mylist}</ul>
          </div>
        ) : null}
      </>
    );
  }
}
