import React, { useState } from 'react'
import NotesContext from './NotesContext';

function NotesProvider(props) {
    const [notes, setState] = useState({ notes: [] });
    return (
        <NotesContext.Provider value={[notes, setState]}>
            {props.children}
        </NotesContext.Provider>
    )
}

export default NotesProvider;