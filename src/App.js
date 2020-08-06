import React from 'react';
import './App.css';
import './components/Contact'
import Contact from './components/Contact';
import contactData from "./contactData"

// Function-based component
// function App() {
//   const allContacts = contactData.map((x)=><Contact contactData = {x} key = {x.id}/>);
//   return (
//     <div>
//       {allContacts}
//     </div>
//   );
// }

//Class-based component (use this.props when need props, can create more methods along with render)
class App extends React.Component{
  constructor(){
    super()
    this.state = { //states are dynamic and changing a state is reflected across all components
      myVar: 10,
      contactData: contactData,
      isLoading: true
    }
    this.changeContactData = this.changeContactData.bind(this)
  }
  changeContactData(id, gen){
    this.state.contactData.map((con) => {
      if (con.id == id)
        con.gender = gen;
    })
  }
  componentDidMount(){
    setTimeout(()=>{
      this.setState((prevState)=>{
        prevState.isLoading = false
        return prevState
      })
      console.log(this.state.isLoading)
    },2000)
    
  }  
  render(){
    const allContacts = this.state.contactData.map((x)=><Contact contactData = {x} key = {x.id} contactDataHandler={this.changeContactData} isLoading = {this.state.isLoading}/>);
    console.log(allContacts)
    return (
      <div>
        {allContacts}
        My random num: {this.state.myVar}
      </div>
    );
  }
}

export default App;
