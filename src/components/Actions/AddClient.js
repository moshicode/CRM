import React, { Component } from 'react';
import axios from 'axios';

class AddClient extends Component {
    constructor() {
        super()
        this.state = {
            firstname: '',
            surname: '',
            country: '',
            owner: ''
        }
    }

    addClientDatabase = async () => {
        let fullName = this.state.firstname + ' ' + this.state.surname
        await axios.post('http://localhost:8000/addclient',
            {
                name: fullName,
                country: this.state.country,
                owner: this.state.owner,
                sold: false,
                firstContact: new Date(),
                emailType: '',
                email: ''
            })
    }

    onSubmit = (e) => {
        e.preventDefault()
        this.addClientDatabase()
        console.log(this.state)
        this.setState({
            firstname: '',
            surname: '',
            country: '',
            owner: ''
        })
    }

    handleInputChange = (e) => this.setState({ [e.target.name]: e.target.value })

    render() {
        return (
            <div id='add-sectiocn'>
                <h3>Add Client</h3>
                <div className="add-client-form">
                    <label>First Name
                    <input type="text" name="firstname" value={this.state.firstname} onChange={this.handleInputChange} />
                    </label>
                    <label>Surname
                    <input type="text" name="surname" value={this.state.surname} onChange={this.handleInputChange} />
                    </label>
                    <label>Country
                    <input type="text" name="country" value={this.state.country} onChange={this.handleInputChange} />
                    </label>
                    <label>Owner
                    <input type="text" name="owner" value={this.state.owner} onChange={this.handleInputChange} />
                    </label>
                    <button className="btn add-btn" onClick={this.onSubmit}>Add New Client</button>
                </div>
            </div>
        );
    }
}

export default AddClient;