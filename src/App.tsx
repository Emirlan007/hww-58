import './App.css';
import {useState} from "react";
import Modal from "./components/Modal/Modal.tsx";

const App = ( ) => {
    const [showModal, setShowModal] = useState(false);

    const onCloseModal = () => setShowModal(false)

  return (
      <>
          <button
              type="button"
              className="btn btn-primary d-block ms-auto me-auto mt-2"
              onClick={() => setShowModal(true)}
          >
              Показать
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
      </>
  );
};

export default App;
