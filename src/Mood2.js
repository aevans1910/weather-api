import React from 'react';

export default function Mood2 (props) {
  const { moodData, weatherData } = props
  // This method returns undefined or a JSX component
  if (moodData == null) {
    // If there is no data return undefined
    return null
  }

  /* 
  This next step needs another level of error checking. It's 
  possible to get a JSON response for an invalid zip in which 
  case the step below fails. 
  */ 
  // Take the weather data apart to more easily populate the component
  
  return (
    <div className="container">
      <div>Mood: {moodData}</div>
      <div>Weather: {weatherData}</div>
    </div>
  )
}
