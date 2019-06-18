import React, { Component } from 'react';
import Moment from 'react-moment';

class ClientsRow extends Component {

    onClickRow = (e) => {
        this.props.switchPopup();
        this.setCurrentID()
    }

    setCurrentID = () => {
        this.props.setCurrentID(this.props.data._id)
    }

    render() {
        let { name, firstContact, emailType, sold, owner, country } = this.props.data
        return (
            <div className="table-row" onClick={this.onClickRow}>
                <div>{name.split(' ')[0]}</div>
                <div>{name.split(' ').slice(1).join(' ')}</div>
                <div>{country}</div>
                <div><Moment format="DD/MM/YYYY">{firstContact}</Moment></div>
                <div>{emailType ? emailType : '-'}</div>
                <div>{sold ? <i className="fas fa-check"></i> : '-'}</div>
                <div>{owner}</div>
            </div>
        );
    }
}

export default ClientsRow;