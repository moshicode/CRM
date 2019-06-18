import React, { Component } from 'react';
import ClientsHeader from './ClientsTableHeader.js';
import ClientsRow from './ClientsTableRow.js';
import ClientsFilterTable from './ClientsFilterTable';

class ClientsTable extends Component {
    constructor() {
        super()
        this.state = {
            clientPerPage: 20,
            pageRange: {
                currentPage: 1,
                first: 0,
                last: 20
            }
        }
    }

    moveForward = () => {
        let endPage = Math.ceil(this.props.data.length / this.state.clientPerPage)
        if (this.state.pageRange.currentPage < endPage) {
            this.setState({
                pageRange: {
                    currentPage: this.state.pageRange.currentPage + 1,
                    first: this.state.pageRange.first + this.state.clientPerPage,
                    last: this.state.pageRange.last + this.state.clientPerPage
                }
            })
        }
    }

    moveBackward = () => {
        if (this.state.pageRange.currentPage > 1) {
            this.setState({
                pageRange: {
                    currentPage: this.state.pageRange.currentPage - 1,
                    first: this.state.pageRange.first - this.state.clientPerPage,
                    last: this.state.pageRange.last - this.state.clientPerPage
                }
            })
        }
    }

    render() {
        const currentPageData = this.props.data.slice(this.state.pageRange.first, this.state.pageRange.last)

        return (
            <div className="table-section">
                <ClientsFilterTable
                    data={this.props.data}
                    filterTable={this.props.filterTable}
                    pageRange={this.state.pageRange}
                    moveForward={this.moveForward}
                    moveBackward={this.moveBackward}
                />
                < ClientsHeader />
                <div className="table-body">
                    {currentPageData.map((d, index) =>
                        <ClientsRow
                            key={index}
                            data={d}
                            switchPopup={this.props.switchPopup}
                            setCurrentID={this.props.setCurrentID}
                        />)}
                </div>
            </div>
        );
    }
}

export default ClientsTable;