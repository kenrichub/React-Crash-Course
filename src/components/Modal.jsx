import "./Modal.css";

function Modal({title, cancel, confirm}) {
  return (
    <div>
      <div className="modal">
        <p className="modal__title">{title}</p>
        <div className="modal__buttons">
          <button className="btn btn__cancel">{cancel}</button>
          <button className="btn">{confirm}</button>
        </div>
      </div>
      <div className="backdrop" />
    </div>
  );
}

export default Modal;
