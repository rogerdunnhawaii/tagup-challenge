import React, { Component } from 'react';
import "./index.css"

export default class extends Component {
    state = {

    }

    render() {
        let { title, onConfirm, onCancel } = this.props;

        return (
            <div className="confirmModal"
                style={{ display: this.props.showModal ? "block" : "none" }}
            >
                <h1>{title}</h1>
                <button onClick={onConfirm}>Confirm</button>
                <button onClick={onCancel}>Cancel</button>
            </div>
        )
    }
}