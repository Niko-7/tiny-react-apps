import React from "react"
import './App.css';
import Header from "./Header"
import List from "./List"


class App extends React.Component {

  state = { tasks: ["eat","sleep","party"] }

  

  render() {
    return (
      <div>
        <Header />
        <List tasks={this.state.tasks}/>
      </div>
    );
  }
}

export default App;
