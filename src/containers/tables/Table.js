import React, { Component } from 'react';
import ReactTable, { ReactTableDefaults } from 'react-table-6';
import 'react-table-6/react-table.css'
import Button from '../../components/ui/buttons/Button';
import IconButton from '../../components/ui/buttons/Icon-Button'
import { colorPalette } from 'material-icons-react';

class Table extends Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        const url = this.props.url;
        fetch(
            url, {
            method: "GET"
        }).then(response => response.json()).then(posts => {
            this.setState({ posts: posts })
        })
    }

    render() {
        const columns = [
            {
                Header: this.props.header1,
                accessor: this.props.accessor1,
                width: this.props.width1,
                filterable: this.props.filterable1,
                style: {
                    textAlign: "center"
                }
            },
            {
                Header: this.props.header2,
                accessor: this.props.accessor2,
                width: this.props.width2,
                filterable: this.props.filterable2,
                style: {
                    textAlign: "center"
                }
            },
            {
                Header: this.props.header3,
                accessor: this.props.accessor3,
                width: this.props.width3,
                sortable: false,
                filterable: this.props.filterable3,
                style: {
                    textAlign: "center"
                }
            },
            {
                Header: this.props.header4,
                accessor: this.props.accessor4,
                width: this.props.width4,
                sortable: false,
                filterable: this.props.filterable4
            },
            {
                Header: "Acciones",
                filterable: false,
                sortable: false,
                style: {
                    textAlign: "center"
                },
                Cell: props => {
                    return (
                        <div>
                            <IconButton type="" icon="create" color={colorPalette.grey._700} />
                            <IconButton type="" icon="info" color={colorPalette.blue._700} />
                            <IconButton type="" icon="delete" color={colorPalette.red._700} />
                        </div>
                    )
                }
            }
        ]
        return (
            <div>
                <Button type="" icon="add" btnTxt="Agregar Nueva Materia Prima" />
                <ReactTable className="ReactTable"
                    columns={columns}
                    data={this.state.posts}
                    filterable
                    noDataText={'No se encontraron datos.'}
                    defaultPageSize={10}
                    previousText={'Anterior'}
                    nextText={'Siguiente'}
                    loading={false}
                />
            </div>
        );
    };
}

export default Table;
