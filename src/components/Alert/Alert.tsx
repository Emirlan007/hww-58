import {type PropsWithChildren, useState} from "react";

interface AlertProps extends PropsWithChildren{
    type: 'primary' | 'success' | 'danger' | 'warning';
    onDismiss?: () => void;
    show?: boolean;
}

const Alert = ( {type, show, onDismiss, children}: AlertProps ) => {
    const [showAlert, setShowAlert] = useState(show);

    const closeAlert = () => {
        setShowAlert(false);
    }

    return showAlert &&  (
        <div className={`container alert alert-${type}`} role="alert">
            <div className="row justify-content-between align-items-center">
                <div className="col-11">
                    {children}
                </div>
                <div className="col">
                    {onDismiss !== undefined ?
                    <button onClick={closeAlert} type="button" className="btn-close ps-5"></button>
                        : null
                    }
                </div>
            </div>
        </div>
    );
};

export default Alert;