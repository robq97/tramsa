import React, { Component } from 'react'
import Button from '../../../components/ui/buttons/Button'
import Translate from 'react-translate-component';

class modal extends Component {
    state = {
        body: this.props.body,
        confirmBtn: this.props.confirmBtn,
        confirmBtnAction: this.props.confirmBtnAction
    }
    render() {
        return (
            <div className="modal fade" id={this.props.id} tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLongTitle">{this.props.title}</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        {this.state.body ?
                            <div className="modal-body">
                                {this.props.bodyContent}
                            </div>
                            : null}
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary mb-4 mt-3" data-dismiss="modal">{<Translate content="modalVolver" />}</button>

                            {this.state.confirmBtn ?
                                <Button btnTxt={<Translate content="modalConfirmar" />} onClick={this.state.confirmBtnAction} /> : null}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default modal;