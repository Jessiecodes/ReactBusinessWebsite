import React from 'react';
import './Apply.css';

class Apply extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form className="Application" onSubmit={this.handleSubmit}>
            <h1 className="Application_Title"> We're Hiring! </h1>
          <label>
            Name:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <label>
          Essay:
          <textarea value={this.state.value} onChange={this.handleChange} />
        </label>
        <select>
        <option value="grapefruit">Grapefruit</option>
        <option value="lime">Lime</option>
        <option selected value="coconut">Coconut</option>
        <option value="mango">Mango</option>
        </select>

        <input type="file" />

          <input type="submit" value="Submit" />
        </form>
      );
    }
  }

export default Apply;