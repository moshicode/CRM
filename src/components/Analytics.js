import React, { Component } from 'react';
import axios from 'axios';
import Badges from './Analytics/Badges'
import Loading from './Loading';


class Analytics extends Component {
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
            data: res.data,
            isLoading: false
        })
    }

    render() {
        if (this.state.isLoading) { return <Loading /> }
        return (
            <div id='analytics'>
                <Badges data={this.state.data} />
            </div>
        );
    }
}

export default Analytics;