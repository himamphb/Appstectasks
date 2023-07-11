import React, { Component } from "react";
import "./Todos.scss";
import TodosContainer from "../TodosContainer/TodosContainer";
class Todos extends Component {
  constructor() {
    super();
    this.state = {
      taskName: "",
      taskDate: "",
      taskList: [],
      isChecked: false,
      id: 0,
    };
  }

  handleChange = (e) => {
    this.setState({
      taskName: e.target.value,
    });
  };

  handleDate = (e) => {
    this.setState({
      taskDate: e.target.value,
    });
  };

  submitTask = (e) => {
    const { taskName, taskDate, id, taskList } = this.state;
    e.preventDefault();
    const taskObj = {
      id: id,
      taskName: taskName,
      taskDate: taskDate,
    };
    this.setState({
      taskList: [...taskList, taskObj],
      id: id + 1,
      taskName: "",
      taskDate: "",
    });

    console.log(taskObj);
   
  };
  render() {
    console.log(this.state.taskList);
    const { taskName, taskDate, taskList } = this.state;
    const taskContent = taskList.map((task) => {
      return (
        <TodosContainer
          name={task.taskName}
          date={task.taskDate}
          taskId={task.id}
        />
      );
    });
    return (
      <>
        <div className="container">
          <h1>Todos App</h1>
          <form onSubmit={this.submitTask}>
            <input type="text" value={taskName} onChange={this.handleChange} />
            <input type="date" value={taskDate} onChange={this.handleDate} />
            <button type="submit">Add Task</button>
          </form>
        </div>
        <div className="todos-parent">{taskContent}</div>
      </>
    );
  }
}

export default Todos;
