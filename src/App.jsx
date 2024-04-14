import "./App.css";
import Todo from "./components/Todo.jsx";
import Heading from "./components/Title.jsx";
import Modal from "./components/Modal.jsx";
import Counter from "./components/Counter.jsx";
import React, { useState, useEffect } from "react";

function App() {
  const [showModal, setShowModal] = useState(false);

  function onTodoDelete() {
    setShowModal(true);
  }

  function cancelTodoDelete() {
    setShowModal(false);
  }

  function confirmModal() {
  }

  useEffect(()=>{console.log('mount')}, [])

  return (
    <div>
      <Heading />
      <div>
        <input type="text" onChange={(event) => {}} />
        <button
          onClick={() => {
            setShowModal(true);
          }}
        >
          Add Todo
        </button>
      </div>
      <div className="todo__wrapper">
        <Todo
          onTodoDelete={onTodoDelete}
          title="Finish Frontend Simplified"
          paragraph="Code along with Frontend Simplified step by step"
        />
        <Todo
          onTodoDelete={onTodoDelete}
          title="Finish Interview Section"
          paragraph="Finish every interview question in the next 6 weeks"
        />
        <Todo
          onTodoDelete={onTodoDelete}
          title="Land a $100k Job"
          paragraph="Apply to 100 jobs"
        />
      </div>
      {showModal && <Modal cancelTodoDelete={cancelTodoDelete} confirmModal={confirmModal} title="Are you sure?" />}
    </div>
  );
}

export default App;
