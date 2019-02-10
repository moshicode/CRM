import React from 'react';

const tableHeaderColumns = ['Name', 'Surname', 'Country', 'First Contant', 'Email', 'Sold', 'Owner']

const ClientsHeader = () => {
    return (
        <div className='table-head'>
            {tableHeaderColumns.map((headerColumn, index) => <div key={index}>{headerColumn}</div>)}
        </div>
    );
}

export default ClientsHeader;