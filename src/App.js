import React, { Component } from 'react';
import './App.css';
import AddNewLog from './components/AddNewLog'
import Log from './components/Log'


let data = [
  {
    id: "1",
    title: "Alarm high energy consumption is triggered",
    message: "Energy consumption of this asset is high. Please resolve this issue ASAP!!!",
    time: "2019-04-10T17:47:50Z"
  },
  {
    id: "2",
    title: "New alarm created",
    message: "A new alarm 'Low Apparent Power' has been created.",
    time: "2018-04-10T14:47:50Z"
  }
]

class App extends Component {

  state = {
    data,
    filtered: data,
    search: ""
  }

  getLogs = () => {
    let arr = this.state.data;
    if (this.state.search !== "") {
      arr = this.state.filtered
    }

    return arr.map((log) => {
      return <Log
        key={log.id}
        log={log}
        onDelete={(id) => {

          let updatedData = this.state.data.filter((log) => {
            return log.id !== id
          })

          this.setState({ data: updatedData })

        }}

      />
    })
  }

  render() {
    return (
      <div className="App">

        <input
          placeholder="search"
          onChange={(e) => {
            let search = e.target.value.toLowerCase();
            let filtered = this.state.data.filter((log) => {
              // filter by title
              return log.title.toLowerCase().includes(search)
            })
            this.setState({ filtered, search })
          }}
          value={this.state.search}
        />
        <AddNewLog onSubmitForm={(newLog) => {
          let data = [newLog, ...this.state.data]
          this.setState({ data })
        }} />
        {this.getLogs()}
      </div>
    );
  }
}

export default App;
