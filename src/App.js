import React from 'react';
import './App.css';
import './components/Contact'
import Contact from './components/Contact';
import contactData from "./components/contactData"

function App() {
  const contacts = contactData.map(x => 
    <div>
        <h1>Name: {x.name}</h1>
        <h2>Phone Num: {x.ph}</h2>
        <h3>Email: {x.email}</h3>
    </div>
  )
  return (
    <div>
      {/* 
      Could use props too from App.js:
      <Contact email="eisaadil@outlook.com" name="Eisa Adil" phoneNum = "2263408134"/>
      <Contact email="eisaadil@gmail.com" name="Eisa Adilz" phoneNum = "3533434"/>  */}
      {/* <Contact contactData = {{contactData}}/> */}
      <Contact contactData = {contacts}></Contact>
    </div>
  );
}

export default App;
