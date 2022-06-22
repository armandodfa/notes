import React, { useContext } from "react";
import { AlertContext } from "../context/alert/alertContext";
import { TransitionGroup, CSSTransition } from "react-transition-group";
export const Notes = ({ notes, onRemove }) => {
  const alert = useContext(AlertContext);
  return (
    <TransitionGroup component="ul" className="list-group m-2">
      {notes.map((note) => (
        <CSSTransition key={note.id} classNames={"note"} timeout={800}>
          <li className="list-group-item note">
            <div>
              <strong>{note.title}</strong>
              <small>{note.date}</small>
            </div>
            <button
              onClick={() => {
                onRemove(note.id);
                alert.show("Заметка была удалена", "danger");
                setTimeout(()=>{alert.hide()},1500)
              }}
              type="button"
              className="btn-sm btn-outline-danger"
            >
              &times;
            </button>
          </li>
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};
