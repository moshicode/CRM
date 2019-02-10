import React, { Component } from 'react';
import axios from 'axios';

class UpdatePopup extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstname: props.selectedClient.name.split(' ')[0],
            surname: props.selectedClient.name.split(' ').slice(1).join(' '),
            country: props.selectedClient.country
        }
    }

    onClickUpdateData = (e) => {
        this.updateClientDatabase();
        this.updateClientRowData();
        this.props.switchPopup();
    }

    handleChangeInput = (e) => {
        let name = e.target.name
        let value = e.target.value
        this.setState({ [name]: value })
    }

    updateClientDatabase = async () => {
        let fullName = this.state.firstname + ' ' + this.state.surname
        await axios.put('http://localhost:8000/updateclient/' + this.props.selectedClient._id,
            {
                name: fullName,
                country: this.state.country
            })
    }

    updateClientRowData = () => {
        this.props.updateClientData(this.state.firstname, this.state.surname, this.state.country)
    }

    render() {
        return (
            <div className="popup">
                <div className="update-form-section">
                    <div className="close-btn" onClick={this.props.switchPopup}><i className="fas fa-times"></i></div>
                    <label>First Name
                    <input type="text" name="firstname" placeholder="New Name.." value={this.state.firstname} onChange={this.handleChangeInput} />
                    </label>
                    <label>Surname
                    <input type="text" name="surname" placeholder="New Surname.." value={this.state.surname} onChange={this.handleChangeInput} />
                    </label>
                    <label>Country
                    <input type="text" name="country" placeholder="New Country.." value={this.state.country} onChange={this.handleChangeInput} />
                    </label>
                    <button className="btn update-popup-btn" onClick={this.onClickUpdateData}>Update</button>
                </div>
            </div>
        );
    }
}

export default UpdatePopup;