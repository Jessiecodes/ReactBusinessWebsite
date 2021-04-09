import React, { Component } from 'react'

export default class Apply extends Component {
    constructor(props) {
        super(props)

    }

    valid(item,type)
    {
        console.warn("item", item,type)
    }

    render() {
        return (
            <div className="Application__Form">
                <h1>Apply Now</h1>
                <input type="text" placeholder="Enter name" 
                onChange={(item)=>this.valid(item,"name")} 
                />
                <br />
                <input type="password" placeholder="Enter password" 
                onChange={(item)=>this.valid(item,"password")} 
                />
                <br />
                <button>Submit</button>
            </div>
        )
    }
}
