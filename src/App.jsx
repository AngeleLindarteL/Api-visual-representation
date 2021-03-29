import React from 'react';
import './app.css';
import Greeting from './components/hello'
import Themes from './components/theme'

function App() {

  const userId = 0;

  return (
    <div className="App">
      <Greeting id = {userId}/>
      <Themes/>
    </div>
  );
}

export default App;