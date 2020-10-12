import React, { useContext } from 'react'
import NotesContext from './NotesContext';
import { NavLink } from 'react-router-dom'
function NoteShow(props) {
  const [notes, setState] = useContext(NotesContext);
  console.log(notes)
  const note = notes.notes.find(o => o.id == props.match.params.id);

  function deleteNote() {
    fetch(`http://localhost:7777/posts/${note.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
    })
    props.history.push('/');
  }

  return (
    <>
      <div className="note">
        <p>
          {note ? note.content : 'Не найден'}
        </p>
        <div className="wrap-create">
          <NavLink className="but" to={`/posts/new/${props.match.params.id}`}>Edit</NavLink>
          <NavLink className="but" to={`/`} onClick={deleteNote}>Delete</NavLink>
        </div>
      </div>
    </>);
}
export default NoteShow;
