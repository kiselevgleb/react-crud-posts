import React, { useState } from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { NavLink } from 'react-router-dom'
import NoteInp from './Note-inp';
import NoteOut from './Note-out';
import NoteShow from './NoteShow';

import { createBrowserHistory } from "history";
import NotesProvider from './NotesProvider';

function App() {
  const customHistory = createBrowserHistory();
  return (
    <NotesProvider>
      <Router history={customHistory}>
        <div className="wrap">
          <div className="wrap-create">
            <NavLink className="but" exact to="/posts/new" >Create post</NavLink>
          </div>
          <div className="page">
            <Switch>
              <Route path="/posts/new/:id" component={NoteInp} />
              <Route exact path="/posts/new" component={NoteInp} />
              <Route path="/posts/:id" component={NoteShow} />
              <Route path="/" component={NoteOut} />
            </Switch>
          </div>
        </div>
      </Router>
    </NotesProvider>
  );
}
export default App;