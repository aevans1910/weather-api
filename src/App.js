import React, { Component } from 'react';

import './App.css';

import Weather from './Weather'
import Form from './Form'
import Header from './Header'
import SaveMood from './SaveMood';
import Mood from './Mood';

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
      moodData: [],
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

  handleInputChange(inputValue) {
    this.setState({inputValue})
  }

  handleMoodSubmit(e, mood) {
    e.preventDefault()
    const {moodData} = this.state
    moodData.push({
      mood,
      weather: this.state.weatherData.weather[0].main
    })
    this.setState({moodData})
  }

  render() {
    const {weatherData, moodData} = this.state
    return (
      <div className="App">
        <Header />
        <Form handleSubmit = {(e) => this.handleSubmit(e)} handleInputChange = {this.handleInputChange.bind(this)}/>

        {/** Conditionally render this component */}
        <Weather weatherData = {weatherData}/>
        {weatherData && <Mood handleSubmit = {(e, mood) => this.handleMoodSubmit(e, mood)} />}
        <SaveMood moodData={moodData} />
      </div>
    );
  }
}

export default App;
