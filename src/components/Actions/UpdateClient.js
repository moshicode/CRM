import React, { Component } from 'react';
import axios from 'axios';


class UpdateClient extends Component {
    constructor() {
        super()
        this.state = {
            _id: '',
            owner: '',
            emailType: ''
        }
    }

    handleInputChange = (e) => this.setState({ [e.target.name]: e.target.value })

    // Create one mehod instead of all three, pass what you want to update as a parameter
    onTransfer = async () => {
        if (this.state.owner) {
            await axios.put('http://localhost:8000/clients/' + this.state._id,
                {
                    owner: this.state.owner
                })
        }
    }

    onSend = async () => {
        if (this.state._id && this.state.emailType) {
            await axios.put('http://localhost:8000/clients/' + this.state._id,
                {
                    emailType: this.state.emailType
                })
        }
    }

    onDeclare = async () => {
        if (this.state._id) {
            await axios.put('http://localhost:8000/clients/' + this.state._id,
                {
                    sold: !this.props.data.sold
                })
        }
    }
    // Seaparte into different components
    // User existing components if you already created them! (UpdateClientInput)
    render() {
        return (
            <div id='update-client'>
                <h3>Update Client</h3>
                <div className="update-client-form">
                    <label>Client Name
                        <input type="text" name="_id" list="clients" placeholder="Choose Client" onChange={this.handleInputChange} />
                        <datalist id="clients">
                            {this.props.data.map((client, index) =>
                                <option key={index} value={client._id}>{client.name}</option>
                            )}
                        </datalist>
                    </label>
                    <label>Transfer Ownership to
                        <select name="owner" onChange={this.handleInputChange} placeholder="Choose Owner">
                            {this.props.data.map((client, index) =>
                                <option key={index} value={client.owner} >{client.owner}</option>
                            )}
                        </select>
                        <button className="btn update-btn" onClick={this.onTransfer}>Transfer</button>
                    </label>
                    <label>Send Email
                    <select name="emailType" onChange={this.handleInputChange}>
                            <option value="A">A</option>
                            <option value="B">B</option>
                            <option value="C">C</option>
                            <option value="D">D</option>
                        </select>
                        <button className="btn update-btn" onClick={this.onSend}>Send</button>
                    </label>
                    <label>Declare Sale
                        <button className="btn update-btn" onClick={this.onDeclare}>DECLARE</button>
                    </label>
                </div>
            </div>
        );
    }
}

export default UpdateClient;