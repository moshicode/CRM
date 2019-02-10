import React, { Component } from 'react';
import NewClientsBadge from './Badges/NewClientsBadge';
import SentEmailBadge from './Badges/SentEmailBadge';
import OutClientsBadge from './Badges/OutClientsBadge';
import moment from 'moment';

class Badges extends Component {
    // One badge component instead of one for each type of badge
    render() {
        let localTime = moment(new Date()).format("MMMM YYYY")
        return (
            <div className='badges'>
                <NewClientsBadge data={this.props.data.map(d => moment(d.firstContact).format("MMMM YYYY")).filter(d => d === localTime)} />
                <SentEmailBadge data={this.props.data.filter(d => d.emailType !== null)} />
                <OutClientsBadge data={this.props.data.filter(d => d.sold !== true)} />
            </div>
        );

    }
}

export default Badges;