import React, { Component } from 'react';
import axios from 'axios';
import AddClient from './Actions/AddClient';
import UpdateClient from './Actions/UpdateClient';
import Loading from './Loading';


class Actions extends Component {
    constructor() {
        super()
        this.state = {
            data: [],
            isLoading: true
        }
    }

    async getClients() {
        return await axios.get("http://localhost:8000/clients")
    }

    async componentDidMount() {
        const res = await this.getClients()
        this.setState({
            data: res.data.map(d => ({
                _id: d._id,
                name: d.name,
                country: d.country,
                owner: d.owner,
            })),
            isLoading: false
        })
    }

    // updateClientData = (id, name, surname, country) => {
    //     const data = [...this.state.data];
    //     const clientDataIndex = data.findIndex(d => d._id === id)
    //     let fullName = `${name} ${surname}`
    //     data[clientDataIndex].name = fullName;
    //     data[clientDataIndex].country = country;
    //     this.setState({
    //         data: data
    //     })
    // }

    render() {
        if (this.state.isLoading) { return <Loading /> }
        return (
            <div className='actions-sections'>
                < AddClient />
                < UpdateClient data={this.state.data} />
            </div>
        );
    }
}

export default Actions;