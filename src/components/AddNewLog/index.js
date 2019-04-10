import React, { Component } from 'react';
import "./index.css"
import moment from 'moment'
import ConfirmModal from '../ConfirmModal'
import { FaCommentAlt } from 'react-icons/fa';

const uuidv4 = require('uuid/v4');


class AddNewLog extends Component {
  state = {
    title: "",
    message: "",
    showModal: false
  }

  render() {
    return (
      <div className="addNewLog">
        <ConfirmModal
          showModal={this.state.showModal}
          title="Submit log?"
          onConfirm={() => {
            let log = this.state;
            log.time = moment.utc().format()
            log.id = uuidv4()
            this.props.onSubmitForm(log)

            this.setState({showModal: false})
          }}
          onCancel={() => {
            this.setState({ showModal: false })
          }}
        />
        <h1>Add new log</h1>
        <input placeholder="Log Title"
          value={this.state.title}
          onChange={(e) => {
            let title = e.target.value;
            this.setState({ title })
          }}
        />
        <textarea placeholder="Log Message"
          value={this.state.message}
          onChange={(e) => {
            let message = e.target.value;
            this.setState({ message })
          }}

        />
        <button onClick={() => {
          this.setState({showModal: true})
        }}>
        <FaCommentAlt />
        <div>Submit Log</div>
        
        </button>
      </div>
    )
  }
}

export default AddNewLog