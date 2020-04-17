import React, { Component } from 'react'
import Button from '../../../components/ui/buttons/Button'

class modal extends Component {
    state = {
        body: this.props.body,
        confirmBtn: this.props.confirmBtn,
        confirmBtnAction: this.props.confirmBtnAction
    }
    render() {
        return (
            <div class="modal fade" id={this.props.id} tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLongTitle">{this.props.title}</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        {this.state.body ?
                            <div class="modal-body">
                                {this.props.bodyContent}
                            </div>
                            : null}
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary mb-4 mt-3" data-dismiss="modal">Volver</button>

                            {this.state.confirmBtn ?
                                <Button btnTxt="Confirmar" onClick={this.state.confirmBtnAction} /> : null}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default modal;