import React, { Component } from 'react';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';

class ExportToExcel extends Component {

    state = {
        category: this.props.category
    }
    render() {

        return (
            <div>
                <ReactHTMLTableToExcel
                    id="table-xls-button"
                    className="btn navbar-grey bg-dark text-white mb-4 mt-3"
                    table="table-to-xls"
                    filename={this.props.filename}
                    sheet={this.props.filename}
                    buttonText="Exportar a Excel" />
                <table hidden="true" id="table-to-xls">
                    <thead>
                        <div>
                            <tr>
                                <th>{this.props.title}</th>
                                <th>{"Fecha: " + this.props.date}</th>
                                <th>{"Hora: " + this.props.time}</th>
                            </tr>
                            <tr>

                            </tr>
                            <tr>
                                <th>{this.props.header1}</th>
                                <th>{this.props.header2}</th>
                                <th>{this.props.header3}</th>
                            </tr>
                        </div>
                    </thead>
                    <tbody>
                        {
                            this.props.rows.map(row => {
                                return (
                                    <tr key={row.id}>
                                        <td>{row.userId}</td>
                                        <td>{row.title}</td>
                                        <td>{row.id}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default ExportToExcel;

