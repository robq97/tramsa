import React, { Component } from 'react'
import Button from '../../../../components/ui/buttons/Button'
import { Link } from 'react-router-dom'

class Normal extends Component {

    render() {
        return (
            <div>
                <Link to={this.props.to}>
                    <Button type="" icon="add" btnTxt={this.props.btnTxt} />
                </Link>
            </div>
        )
    }
};

export default Normal;