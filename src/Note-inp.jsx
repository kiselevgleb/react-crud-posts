import React, { useContext } from 'react'
import NotesContext from './NotesContext';

function NoteInp(props) {
  const [notes, setState] = useContext(NotesContext);
  let id = 0;
  let content;
  if (props.match.params.id != undefined) {
    id = Number(props.match.params.id);
    const note = notes.notes.find(o => o.id == id);
    content = note.content;
  }
  const handleSubmit = evt => {
    evt.preventDefault();
    fetch("http://localhost:7777/posts", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify({ "id": id, "content": evt.target.text.value })
    })
    console.log(evt.target.text.value)
    props.history.push('/');
  }
  const exitNote = evt => {
    props.history.push('/');
  }
  return (
    <form className="form" onSubmit={handleSubmit}>
      <label className="label" htmlFor="text" >New post</label>
      <button className="butCros" onClick={exitNote}>&#215;</button>
      <input className="inp" name="text" defaultValue={content} />
      <div className="wrap-but">
        <button className="but">Publish</button>
      </div>
    </form>);
}
export default NoteInp;