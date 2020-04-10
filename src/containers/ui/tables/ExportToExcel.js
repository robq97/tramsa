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

                            {this.state.category === "Productos" ?
                                <tr>
                                    <th>{this.props.header1}</th>
                                    <th>{this.props.header2}</th>
                                    <th>{this.props.header3}</th>
                                </tr> : null}

                            {this.state.category === "Inventario" ? <tr>
                                <th>{this.props.header1}</th>
                                <th>{this.props.header2}</th>
                                <th>{this.props.header3}</th>
                                <th>{this.props.header4}</th>
                                <th>{this.props.header5}</th>
                            </tr> : null}

                            {this.state.category === "Ventas" ? <tr>
                                <th>{this.props.header1}</th>
                                <th>{this.props.header2}</th>
                                <th>{this.props.header3}</th>
                            </tr> : null}

                            {this.state.category === "Precios" ? <tr>
                                <th>{this.props.header1}</th>
                                <th>{this.props.header2}</th>
                                <th>{this.props.header3}</th>
                            </tr> : null}

                        </div>
                    </thead>

                    {this.state.category === "Productos" ?
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
                        </tbody> : null}

                    {this.state.category === "Inventario" ?
                        <tbody>
                            {
                                this.props.rows.map(row => {
                                    return (
                                        <tr key={row.id}>
                                            <td>{row.userId}</td>
                                            <td>{row.title}</td>
                                            <td>{row.id}</td>
                                            <td>{row.id}</td>
                                            <td>{row.id}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody> : null}

                    {this.state.category === "Ventas" ?
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
                        </tbody> : null}

                    {this.state.category === "Precios" ?
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
                        </tbody> : null}
                </table>
            </div>
        );
    }
}

export default ExportToExcel;