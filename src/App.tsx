import './App.css';
import {useState} from "react";
import Modal from "./components/Modal/Modal.tsx";
import Alert from "./components/Alert/Alert.tsx";

const App = ( ) => {
    const [showModal, setShowModal] = useState(false);
    const [showAlert, setShowAlert] = useState(true);

    const onCloseModal = () => setShowModal(false);

  return (
      <>
          <button
              type="button"
              className="btn btn-primary d-block ms-auto me-auto mt-2 mb-5"
              onClick={() => setShowModal(true)}
          >
              Show
          </button>

          <Modal
              isOpen={showModal}
              title={"Some kinda modal title"}
              onClose={onCloseModal}
          >
              <div className="modal-body">
                  <p>This is modal content</p>

              </div>
              <div className="modal-footer">
                  <button
                      type="button"
                      className="btn btn-danger d-block ms-auto"
                      onClick={onCloseModal}
                  >
                      Close
                  </button>
              </div>
          </Modal>

          <Alert
              type={"danger"}
              onDismiss={() => setShowAlert(false)}
              show={showAlert}
          >
              This is a danger type alert
          </Alert>

          <Alert
              type={"success"}
              show={showAlert}
          >
              This is a success type alert
          </Alert>
      </>
  );
};

export default App;
