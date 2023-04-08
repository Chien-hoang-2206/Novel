import React, { Component } from 'react';

class DataTable extends Component {
    render() {
        return (
            <tr>
                <td>
                    {this.props.obj.id}
                </td>
                <td>
                    {this.props.obj.title}
                </td>
                <td>
                    {this.props.obj.description}
                </td>
                <td>
                    {this.props.obj.model}
                </td>
                <td>
                    {this.props.obj.type}
                </td>
            </tr>
        );
    }
}

export default DataTable;