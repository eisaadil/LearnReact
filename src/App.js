import React from 'react';
import './App.css';
import './components/Contact'
import Contact from './components/Contact';

function App() {
  
  return (
    <div>
      {/* 
      Could use props too from App.js:
      <Contact email="eisaadil@outlook.com" name="Eisa Adil" phoneNum = "2263408134"/>
      <Contact email="eisaadil@gmail.com" name="Eisa Adilz" phoneNum = "3533434"/>  */}
      <Contact contactData = {{contactData}}/>
    </div>
  );
}

export default App;
