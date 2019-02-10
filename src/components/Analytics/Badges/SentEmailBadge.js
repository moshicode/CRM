import React, { Component } from 'react';

class SentEmailBadge extends Component {
    render() {

        return (
            <div className='badge'>
                <i className="far fa-envelope icon"></i>
                <div className="badge-info">
                    <div className="badge-num">{this.props.data.length}</div>
                    <div className="badge-title">Emails Sent</div>
                </div>
            </div>
        );
    }
}

export default SentEmailBadge;