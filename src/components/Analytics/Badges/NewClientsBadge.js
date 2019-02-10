import React, { Component } from 'react';
import moment from 'moment';

class NewClientsBadge extends Component {
    render() {
        let monthText = moment(new Date()).format("MMMM")

        return (
            <div className='badge'>
                <i className="fas fa-chart-line icon"></i>
                <div className="badge-info">
                    <div className="badge-num">{this.props.data.length}</div>
                    <div className="badge-title">New {monthText} Clients</div>
                </div>
            </div>
        );
    }
}

export default NewClientsBadge;