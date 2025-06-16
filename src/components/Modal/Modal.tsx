import Backdrop from "../Backdrop/Backdrop.tsx";
import type {MouseEventHandler, PropsWithChildren} from "react";

interface ModalProps extends PropsWithChildren{
    isOpen: boolean;
    title: string;
    onClose: MouseEventHandler;
}

const Modal = ( { isOpen, onClose, title, children }: ModalProps ) => {
    return (
        <>
            <Backdrop show={isOpen}/>
            <div
                className="modal show"
                style={{ display: isOpen ? 'block' : 'none' }}
                onClick={onClose}
            >
                <div className="modal-dialog" onClick={event => event.stopPropagation()}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5">{title}</h1>
                            <button
                                type="button"
                                className="btn-close"
                                onClick={onClose}
                            ></button>
                        </div>
                            {children}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Modal;