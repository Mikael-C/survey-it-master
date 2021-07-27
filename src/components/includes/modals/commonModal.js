import * as React from 'react';
import PropTypes from 'prop-types';
import { characterRange, randomString } from '../../../helpers/helper';

export default function CommonModal({visibility, children, onCancel, onConfirm, modalControl, title=null}) {

    const modalId = randomString(8, characterRange('A','Z'));
    React.useEffect(() => {
        if (visibility) {
            document.getElementById(modalId+'OpenButton').click();
        } else {
            document.getElementById(modalId+'CloseButton').click();
        }
    }, [visibility,modalId]);

    return (
        <React.Fragment>
            <div>
                {/* Button trigger modal */}
                <button id={modalId+'OpenButton'} type="button" className="d-none" data-toggle="modal" data-target={'#'+modalId}></button>

                {/* Modal */}
                <div className="modal fade open" id={modalId} tabIndex={-1} role="dialog" aria-labelledby="modalTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="modalTitle">{title ?? 'Modal Title'}</h5>
                                <button id={modalId+'CloseButton'} onClick={()=>{ onCancel(); modalControl(false); }} type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                {children??null}
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={()=>{ onCancel(); modalControl(false); }} data-dismiss="modal">Cancel</button>
                                <button type="button" className="btn btn-primary" onClick={()=>{ onConfirm(); modalControl(false); }}>Confirm</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

// PropTypes
CommonModal.propTypes = {
    title: PropTypes.string,
    visibility: PropTypes.bool.isRequired,
    modalControl: PropTypes.func,
    onCancel: PropTypes.func,
    onConfirm: PropTypes.func,
}
