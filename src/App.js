import React from 'react';
import './App.css';
import Header from './Header';
import List from './List';
import Input from "./input"

class App extends React.Component {
  state = { tasks: ['eat', 'sleep', 'party'] };
  render() {
    return (
      <div>
        <Header />
        <Input addTask={this.addTask}/>
        <List tasks={this.state.tasks} removeTask={this.removeTask} />
      </div>
    );
  }

  removeTask = (taskToRemove) => {
    this.setState((currState) => {
      const newTasks = currState.tasks.filter((task) => {
        return task !== taskToRemove;
      });
      return { tasks: newTasks };
    });
  };
 addTask = (taskToAdd) => {
          this.setState(currState => {
            const newState = {
              tasks: [taskToAdd, ...currState.tasks]
            };
            return newState;
          })
  }
}

export default App;
