import React from "react"

class Contact extends React.Component{

    constructor(){
        super()
        this.state = {
            countVar: 0,
            gender: "male"
        }
        this.clickedEmail = this.clickedEmail.bind(this)
        this.changedgender = this.changedgender.bind(this)
    }

    clickedEmail(){
        //alert("Clicked Email (counter)" + this.state.countVar)
        //this.setState({countVar:22})
        this.setState((previousState) => {
            return {countVar: previousState.countVar + 1}
        })
    }

    changedgender(e){
        const gen = e.target.value
        const id = e.target.name.replace(/\D/g,'') //to extract id

        // this.props.contactData.map((c)=>{
        //     if (c.id == id){
        //         c.gender = gen
        //     }
        // })
        this.props.contactDataHandler(id,gen)
        console.log(this.props.contactData)
    }
    
    render(){
        
        return (
        <div>
            <h1>Name: {this.props.contactData.name}</h1>
            <h2>Phone Num: {this.props.contactData.ph}</h2>
            <h3 onClick={this.clickedEmail}>Click Email (counter): {this.props.contactData.email}</h3>
            <p>{this.state.countVar}</p>
            
            <input type="radio" name={"gender"+this.props.contactData.id} value="male" defaultChecked={true ? this.props.contactData.gender == "male": false} onChange={this.changedgender.bind(this)}/>
            <label htmlFor="male">Male</label><br/>
            <input type="radio" name={"gender"+this.props.contactData.id} value="female" defaultChecked={true ? this.props.contactData.gender == "female": false} onChange={this.changedgender.bind(this)}/>
            <label htmlFor="female">Female</label><br/>
        </div>
        )
    }
}

export default Contact