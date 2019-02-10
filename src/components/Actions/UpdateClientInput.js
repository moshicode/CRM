import React, { Component } from 'react'

class UpdateClientInput extends Component {
    constructor() {
        super()
        this.state = {
            name: ''
        }
    }

    handleClientName = () => {
        this.props.handleClientName(this.state)
    }

    handleInputChange = (e) => {
        this.setState({ name: e.target.value })
        this.props.handleClientName(this.state.name)
    }

    render() {
        return (
            <label>Client Name
                        <input type="text" name="_id" list="clients" placeholder="Choose Client" onChange={this.handleInputChange} />
                <datalist id="clients">
                    {this.props.data.map((client, index) =>
                        <option key={index} value={client._id}>{client.name}</option>
                    )}
                </datalist>
            </label>
        );
    }
}

export default UpdateClientInput