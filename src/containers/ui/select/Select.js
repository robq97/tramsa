import React, { Component } from 'react';

class Select extends Component {

    _isMounted = false;

    constructor(props) {
        super(props);
        this.state = {
            options: [],
        };
    }

    componentDidMount() {
        this._isMounted = true;
        let initialOptions = [];
        if (this._isMounted) {
            fetch(this.props.URL)
                .then(response => {
                    return response.json();
                }).then(data => {
                    initialOptions = (data.results || []).map((option) => {
                        return option
                    });
                    console.log(initialOptions);
                    this.setState({
                        options: initialOptions,
                    });
                });
        }
    }

    componentWillUnmount() {
        this._isMounted = false;
    }


    render() {

        let options = this.state.options;
        let optionItems = options.map((option) =>
            <option key={option._id}>{option.ROL_Nombre}</option>
        );

        return (
            <div className={" col-sm-" + this.props.size} > {/* 1 al 12*/}
                <small id={this.props.smallId} className="form-text text-muted mb-1">{this.props.smallTxt}</small>
                <div className="input-group mb-4">
                    <select className="form-control">
                        {optionItems}
                    </select>
                </div>
            </div>
        );
    }
};

export default Select;
