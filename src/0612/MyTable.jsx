import React, { Component } from 'react';

function MyTable() {
    const data = [
        {brand: 'Ford', model: 'Mustang'},
        {brand: 'VM', model: 'Beetle'},
        {brand: 'Tesla', model: 'Model'}
    ];
    
        return (
            <div>
                <table>
                    <tbody>
                    {
                    data.map((item, index) =>
                        <tr key = {index}>
                            <td>{item.brand}</td>
                            <td>{item.model}</td>
                        </tr>)
                    }
                    </tbody>
                </table>
            </div>
        );
    
}

export default MyTable;