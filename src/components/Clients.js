import React, { Component } from 'react';
import axios from 'axios';
import ClientsTable from './Clients/ClientsTable';
import UpdatePopup from './Clients/UpdatePopup';
import Loading from './Loading';

class Clients extends Component {
    constructor() {
        super()
        this.state = {
            data: [],
            showPopup: false,
            currentID: '',
            isLoading: true,
            searchQuery: '',
            type: 'name'
        }
    }

    handleFilter = () => {
        let { type, data, searchQuery } = this.state
        if (type === 'name') {
            return data.filter(c => c[type].split(' ')[0].includes(searchQuery))
        } else if (type === 'sold') {
            return data.filter(c => c[type] === true).filter(c => c.name.split(' ')[0].includes(searchQuery))
        } else {
            return data.filter(c => c[type]).filter(c => c[type].includes(searchQuery))
        }
    }

    filterTable = (searchQuery, type) => {
        this.setState({
            searchQuery: searchQuery,
            type: type
        })
    }

    async getClients() {
        return await axios.get("http://localhost:8000/clients")
    }

    async componentDidMount() {
        const res = await this.getClients()
        this.setState({ data: res.data, isLoading: false })
    }

    switchPopup = () => {
        this.setState({ showPopup: !this.state.showPopup })
    }

    setCurrentID = (id) => {
        this.setState({ currentID: id })
    }

    updateClientData = (name, surname, country) => {
        const data = [...this.state.data];
        const clientDataIndex = data.findIndex(d => d._id === this.state.currentID)
        let fullName = `${name} ${surname}`
        data[clientDataIndex].name = fullName;
        data[clientDataIndex].country = country;
        this.setState({
            data: data
        })
    }

    render() {
        const selectedClient = this.state.data.find((client) => client._id === this.state.currentID);
        let filtered = this.handleFilter()
        if (this.state.isLoading) { return <Loading /> }
        return (
            <React.Fragment>
                {this.state.showPopup && <UpdatePopup showPopup={this.state.showPopup} switchPopup={this.switchPopup} selectedClient={selectedClient} updateClientData={this.updateClientData} />}
                <ClientsTable data={filtered} switchPopup={this.switchPopup} setCurrentID={this.setCurrentID} filterTable={this.filterTable} />
            </React.Fragment>
        );
    }
}

export default Clients;