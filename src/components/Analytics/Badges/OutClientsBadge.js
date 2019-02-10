import React, { Component } from 'react';

class OutClientsBadge extends Component {
    render() {

        console.log(this.props.data)
        return (

            < div className='badge' >
                <i className="far fa-user icon"></i>
                <div className="badge-info">
                    <div className="badge-num">{this.props.data.length}</div>
                    <div className="badge-title">Outstanding Clients</div>
                </div>
            </div >
        );
    }
}

export default OutClientsBadge;