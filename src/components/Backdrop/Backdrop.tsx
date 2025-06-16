import type {MouseEventHandler} from "react";

interface IBackdrop {
    show: boolean;
    onClick?: MouseEventHandler;
}

const Backdrop = ( { show , onClick }: IBackdrop ) => {
    return (
        <div
            className="modal-backdrop show"
            style={{display: show ? 'block' : 'none'}}
            onClick={onClick}
        />
    );
};

export default Backdrop;