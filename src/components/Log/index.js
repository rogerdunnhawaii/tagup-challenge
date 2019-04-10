import React, { Component } from 'react';
import "./index.css"
import moment from 'moment'
import ConfirmModal from '../ConfirmModal'

class Log extends Component {

    state = {
        showModal: false
    }

    render() {
        let log = this.props.log;
        let { title, message, time: timeISO, id } = log;

        // format time
        let m = moment(timeISO)
        let timeString = `${m.format("LTS")}, ${m.format("MM-DD-YY")}`

        // console.log(this.state.showModal);

        return (
            <div className="log">
                <ConfirmModal
                    showModal={this.state.showModal}
                    title = "Delete?"
                    onConfirm={() => {
                        this.props.onDelete(id)
                    }}
                    onCancel={() => {
                        this.setState({showModal: false})
                    }}
                />
                <div className="log-container">
                    <div className="content">
                        <h1>{title}</h1>
                        <p>{message}.</p>
                        <p>{timeString}</p>
                    </div>
                    <button className="delete" onClick={() => {
                        this.setState({showModal: true})
                    }}>Delete</button>
                </div>

            </div>
        )
    }
}


export default Log