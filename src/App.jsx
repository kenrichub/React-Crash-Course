import "./App.css";
import Todo from "./components/Todo.jsx";
import Heading from "./components/Title.jsx";
import Modal from "./components/Modal.jsx";
import Counter from "./components/Counter.jsx";
import React, { useState} from 'react';

function App() {
  return <Counter/>

  const [showModal, setShowModal] = useState(false)

  return (
    <div>
      <Heading />
      <div>
        <input type="text" onChange={(event)=>{}}/>
        <button onClick={()=>{setShowModal(true)}}>Add Todo</button>
      </div>
      <div className="todo__wrapper">
        <Todo
          title="Finish Frontend Simplified"
          paragraph="Code along with Frontend Simplified step by step"
        />
        <Todo
          title="Finish Interview Section"
          paragraph="Finish every interview question in the next 6 weeks"
        />
        <Todo title="Land a $100k Job" paragraph="Apply to 100 jobs" />
      </div>
      {showModal && <Modal title="Are you sure?"/>}
    </div>
  );
}

export default App;
