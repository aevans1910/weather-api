import React, { Component } from 'react';

import './App.css';

import Weather from './Weather'
import Form from './Form'

/** 
 * This example illustrates a simple react project 
 * that works with an external API. 
 * 
 * Take note of the comments they point common 
 * problems you will need to solve with React. 
 * 
 * There are two ideas here
 * - Input/Controlled Component Pattern
 * - Conditionally Rendering components 
 * 
 * The project has an input field where a user will
 * input a zip code. It finds weather data for that
 * zip and displays it in a component. 
 * 
 * */

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      inputValue: '94010',     // Used to hold value entered in the input field
      weatherData: null,  // Used to hold data loaded from the weather API
    }
  }

  async handleSubmit(e) {
    e.preventDefault()
    // ! Get your own API key ! 
    const apikey = process.env.REACT_APP_OPENWEATHERMAP_API_KEY
    console.log(apikey)
    // Get the zip from the input
    const zip = this.state.inputValue
    // Form an API request URL with the apikey and zip
    const url = `https://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=${apikey}`
    // Get data from the API with fetch
    const data = await fetch(url)
    const res = await data.json()
    this.setState({ weatherData: res })
  }

  render() {
    const {weatherData} = this.state
    return (
      <div className="App">

        <Form handleSubmit = {(e) => this.handleSubmit(e)}/>

        {/** Conditionally render this component */}
        <Weather weatherData = {weatherData}/>

      </div>
    );
  }
}

export default App;
