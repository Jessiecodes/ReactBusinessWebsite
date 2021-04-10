import React, { Component } from 'react';
import "./Images.css"
import Popup from './Popup';

class Images extends Component {
    constructor(props) {
        super(props);
        this.state = {
         imageUrl: "",
         imageUrlArray: [
            "https://images.unsplash.com/photo-1496368077930-c1e31b4e5b44?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            "https://images.unsplash.com/photo-1563920443079-783e5c786b83?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1353&q=80",
            "https://images.unsplash.com/photo-1590613607026-15c463e30ca5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80",
            "https://images.unsplash.com/photo-1529265895721-65945a176cff?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            "https://images.unsplash.com/photo-1528312635006-8ea0bc49ec63?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1376&q=80",
            "https://images.unsplash.com/photo-1549109926-58f039549485?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80",
            "https://images.unsplash.com/photo-1529775983207-b68e16037a7f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
            "https://images.unsplash.com/photo-1515432085503-cabf2fbcd690?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80",
            "https://d1unzhqf5a606m.cloudfront.net/images/product/honeywell-6160v-talking-alphanumeric-alarm-keypad.jpg?1340244723",
            "https://zionssecurity.com/wp-content/uploads/2018/11/L5100-Keypad.png",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGUwcDsAQIMEL0MnV5OVfgVlaoy6ebg00lgZS_8gs6DtEOr6jtprz6snNXsj2guFBouGk&usqp=CAU",
            "https://images.pexels.com/photos/6436753/pexels-photo-6436753.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        ],
        showModal: false,
        popImageUrl: ""
        };
}

imageSubmitter = (e) => {
    e.preventDefault();
    let imageUrlArray = this.state.imageUrlArray;
    imageUrlArray.push(this.state.imageUrl)
    this.setState({
        imageUrlArray: imageUrlArray
    })
}

handleLinkChange = (e) => {
    e.preventDefault();
    this.setState({
        imageUrl: e.target.value
    })
}

handlePopup = (url) => {
    this.setState({
        showModal: !this.state.showModal,
        popImageUrl: url
    })
}


render() {
    let imageUrlArray = this.state.imageUrlArray;
    const images = imageUrlArray.map((url, index) => {
        return(
            <img
            className="singleImage"
            src={url}
            key={index}
            onClick={() => this.handlePopup(url)}
            />
        )
    })
    return (
        <div className="Images">
            <form onSubmit={this.imageSubmitter}>
                <input 
                    type="text"
                    placeholder="Please insert image URL"
                    onChange={this.handleLinkChange}
                />
                <button type="Submit" className="submitButton"> Submit Image </button>
            </form>
           {images}
           {this.state.showModal ? (
               <Popup 
                popImageUrl={this.state.popImageUrl}
                closePopup={this.handlePopup} 
                />
           ) : null }
        </div>
    );
  }
}
export default Images;