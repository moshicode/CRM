import React, { Component } from 'react';
import ClientsHeader from './ClientsTableHeader.js';
import ClientsRow from './ClientsTableRow.js';
import ClientsFilterTable from './ClientsFilterTable';

class ClientsTable extends Component {
    constructor() {
        super()
        this.state = {
            pageRange: 0
        }
    }

    setPagination = (num) => {
        let page = this.state.pageRange + (num)
        this.setState({ pageRange: page })
    }

    render() {
        // Consts are decalred either on this.CONST_NAME or consts file
        const clientsPerPage = 20
        const currentPageData = this.props.data.slice(this.state.pageRange, this.state.pageRange + clientsPerPage)
        return (
            <div className="table-section">
                <ClientsFilterTable data={this.props.data} filterTable={this.props.filterTable} setPagination={this.setPagination} />
                < ClientsHeader />
                <div className="table-body">
                    {currentPageData.map((d, index) =>
                        <ClientsRow key={index} data={d} switchPopup={this.props.switchPopup} setCurrentID={this.props.setCurrentID} />)}
                </div>
            </div>
        );
    }
}

export default ClientsTable;