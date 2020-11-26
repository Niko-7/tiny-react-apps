import React from 'react';

class Input extends React.Component {
  state = { task: [] };
  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.task.length === 0) {
      return null;
    }
    this.props.addTask(this.state.task);
    this.setState({ task: [] });
  };
  handleChange = (event) => {
    this.setState({ [event.target.id]: event.target.value });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <input
            class="taskBox"
            id="task"
            name="task"
            type="text"
            value={this.state.task}
            onChange={this.handleChange}
          ></input>
          <button class="inputButton" type="submit">
            Add Task
          </button>
        </label>
      </form>
    );
  }
}

export default Input;
