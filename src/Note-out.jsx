import React, { useEffect, useContext } from 'react'
import { NavLink } from 'react-router-dom'
import NotesContext from './NotesContext';

function NoteOut(props) {
  const [notes, setState] = useContext(NotesContext);
  useEffect(() => {
    fetch("http://localhost:7777/posts")
      .then(response => response.json()
      )
      .then(rates => {
        setState({ notes: rates });
      });
  })

  return (
    <>
      {notes.notes.map(o =>
        <div className="note" key={o.id}>
          <NavLink exact to={`/posts/${o.id}`}>
            <p>{o.content}</p>
          </NavLink>
        </div>
      )
      }
    </>);
}

export default NoteOut;