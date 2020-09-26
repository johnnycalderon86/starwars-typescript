import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { People } from './components/People';
import { Planets } from './components/Planets';



function App() {

  const [page, setPage] = useState<string>('people')



  return (
    <div className="App">
      <h1>Star Wars</h1>
      <Navbar setPage={setPage} />
      <div className="content"></div>
      {page === "people" ? <People /> : <Planets />}
    </div>
  );
}

export default App;
