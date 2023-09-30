import React from 'react';
import './App.css';
import GeneralInfo from "./components/GeneralInfo";
import Education from './components/Education';
import Experience from './components/Experience';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My CV Application</h1>

        { /* Add your components and content here */
            <><GeneralInfo /><Education /><Experience /></>
        
        }
      </header>
    </div>
  );
}

export default App;
