import React, {Component} from "react"

class Form extends Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            age: 0,
            gender: "",
            destination: "",
            dietaryRestrictions: []
        }
    }
    
    render() {
        return (
            <main>
                <form>
                    <input placeholder="First Name" /><br />
                    <input placeholder="Last Name" /><br />
                    <input placeholder="Age" /><br />
                    
                    {/* Create radio buttons for gender here */}
                    <br />
                    
                    {/* Create select box for location here */}
                    <br />
                    
                    {/* Create check boxes for dietary restrictions here */}
                    <br />
                    
                    <button>Submit</button>
                </form>
                <hr />
                <h2>Entered information:</h2>
                <p>Your name: {/* First and last name here */}</p>
                <p>Your age: {/* Age here */}</p>
                <p>Your gender: {/* Gender here */}</p>
                <p>Your destination: {/* Destination here */}</p>
                <p>
                    Your dietary restrictions: 
                    {/* Dietary restrictions here, comma separated */}
                </p>
            </main>
        )
    }
}

export default Form
