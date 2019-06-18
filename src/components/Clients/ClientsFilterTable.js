import React, { Component } from 'react';

class ClientsFilterTable extends Component {
    constructor() {
        super()
        this.state = {
            searchQuery: '',
            type: 'name'
        }
    }

    changeSearchQuery = async (e) => {
        e.preventDefault()
        await this.setState({ [e.target.name]: e.target.value })
        await this.filterTable()
    }

    filterTable = async () => {
        await this.props.filterTable(this.state.searchQuery, this.state.type)
    }

    render() {
        return (
            <div className="table-filter">
                <div className="search-section">
                    <input type="text" name="searchQuery" placeholder="Search..." value={this.state.searchQuery} onChange={this.changeSearchQuery} />
                    <select name="type" onChange={this.changeSearchQuery}>
                        <option value="sold" >Sold</option>
                        <option value="name" >Name</option>
                        <option value="emailType" >Email</option>
                        <option value="owner" >Owner</option>
                        <option value="country" >Country</option>
                    </select>
                </div>
                <div className="pagination-section">
                    <span><i className="fas fa-angle-left" onClick={this.props.moveBackward}></i></span>
                    <span>{this.props.pageRange.first} - {this.props.pageRange.last}</span>
                    <span><i className="fas fa-angle-right" onClick={this.props.moveForward}></i></span>
                </div>
            </div>
        );
    }
}

export default ClientsFilterTable;