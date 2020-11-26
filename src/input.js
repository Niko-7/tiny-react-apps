import React from 'react';

class Input extends React.Component {
  state = {task : []}
    handleSubmit = (event) => {
        event.preventDefault()
        console.log(this.state.task)
        this.props.addTask(this.state.task)
    }
    handleChange = (event) => {
        this.setState({[event.target.id] : event.target.value})
    }
  
    render() {
    return (
        <form onSubmit={this.handleSubmit}>

        <label>
                New Task<input id='task' name='task' type='text' value={this.state.task} onChange={this.handleChange}></input>
                <button type="submit">Add Task</button>
        </label>
      </form>
    );
  }
}

export default Input;
