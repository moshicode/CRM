import React from 'react';

const ClientsHeader = () => {
    const tableHeaderColumns = ['Name', 'Surname', 'Country', 'First Contant', 'Email', 'Sold', 'Owner']
    return (
        <div className='table-head'>
            {tableHeaderColumns.map((headerColumn, index) => <div key={index}>{headerColumn}</div>)}
        </div>
    );
}

export default ClientsHeader;