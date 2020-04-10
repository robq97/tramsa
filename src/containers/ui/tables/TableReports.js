import React, { Component } from 'react';
import ReactTable from 'react-table-6';
import 'react-table-6/react-table.css'
import Button from '../../../components/ui/buttons/Button';
import { Link } from 'react-router-dom';
import ExportToExcel from './ExportToExcel';
import util from '../../../components/util/DateTime'


class TableReports extends Component {

    state = {
        rows: [],
        filename: this.props.filename
    }

    componentDidMount() {
        const url = this.props.url;
        fetch(
            url, {
            method: "GET"
        }).then(response => response.json()).then(rows => {
            this.setState({ rows: rows })
        })
    }


    render() {

        const columns = [
            {
                Header: this.props.header1, accessor: this.props.accessor1, width: this.props.width1, show: this.props.show1
            },
            {
                Header: this.props.header2, accessor: this.props.accessor2, width: this.props.width2, show: this.props.show2
            },
            {
                Header: this.props.header3, accessor: this.props.accessor3, width: this.props.width3, show: this.props.show3
            },
            {
                Header: this.props.header4, accessor: this.props.accessor4, width: this.props.width4, show: this.props.show4
            }
            ,
            {
                Header: this.props.header5, accessor: this.props.accessor5, width: this.props.width5, filterable: this.props.filterable5, show: this.props.show5
            }
            ,
            {
                Header: this.props.header6, accessor: this.props.accessor6, width: this.props.width6, filterable: this.props.filterable6, show: this.props.show6
            },
            {
                Header: this.props.header7, accessor: this.props.accessor7, width: this.props.width7, filterable: this.props.filterable7, show: this.props.show7
            }

        ]

        return (
            <div>
                <div class="row">
                    <div class="col-2">
                        <Link to={this.props.path}>
                            <Button type="" icon="picture_as_pdf" btnTxt="Exportar a PDF" />
                        </Link>
                    </div>
                    <div class=" col text-right">
                        <Link to={this.props.path}>
                            <Button type="" icon="print" btnTxt="Imprimir" onClick={() => window.print()} /> {/*no he probado esto*/}
                        </Link>
                    </div>
                </div>
                {(state, filtredData, instance) => {
                    this.ReactTable = state.pageRows.map(row => { return row._original });
                    return (
                        <div>
                            {filtredData()}
                            <ExportToExcel
                                rows={this.ReactTable}
                                filename={this.state.filename + util.date()} />
                        </div>
                    )
                }}
                <ReactTable
                    className="ReactTable"
                    columns={columns}
                    data={this.state.rows}
                    noDataText={'No se encontraron datos.'}
                    defaultPageSize={15}
                    previousText={'Anterior'}
                    nextText={'Siguiente'}
                    textAlign={'center'}
                    loading={false}>

                    {(state, filtredData, instance) => {
                        this.ReactTable = state.pageRows.map(row => { return row._original });
                        return (
                            <div>
                                {filtredData()}
                                <ExportToExcel
                                    category={this.props.category}
                                    rows={this.state.rows}
                                    filename={this.state.filename + util.date()}
                                    title={this.props.title}
                                    date={util.date()}
                                    time={util.time()}
                                    header1={this.props.header1}
                                    header2={this.props.header2}
                                    header3={this.props.header3}
                                    header4={this.props.header4}
                                    header5={this.props.header5}
                                />
                            </div>
                        )
                    }}
                </ReactTable>
            </div>
        );
    };
}

export default TableReports;

