import React, { Component } from 'react';

class Select extends Component {
    constructor(props) {
        super(props);
        this.state = {
            options: []
        }
    }

    componentDidMount() {
        let initialOptions = [];
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

    render() {
        let property = this.props.property;
        let options = this.state.options;
        let optionItems = options.map((option) =>

            <option key={option}>{option.name = this.props.option}</option>
        );

        return (
            <div class={" col-sm-" + this.props.size} > {/* 1 al 12*/}
                <small id={this.props.smallId} class="form-text text-muted mb-1">{this.props.smallTxt}</small>
                <div class="input-group mb-4">
                    <select class="form-control">
                        {optionItems}
                    </select>
                </div>
            </div>
        );
    }
};

export default Select;
