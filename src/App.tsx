import React from 'react';
import { Switch, Route } from 'react-router-dom'
import { StartPage } from './components/StartPage';
import { People } from './components/People';
import { Planets } from './components/Planets';
import { Starships } from './components/Starships';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/"><StartPage /></Route>
        <Route path="/characters"><People /></Route>
        <Route path="/planets"><Planets /></Route>
        <Route path="/starships"><Starships /></Route>
      </Switch>

    </div>
  );
}

export default App;
