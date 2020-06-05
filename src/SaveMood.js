import React, {Component} from 'react'

import Mood2 from './Mood2'

class SaveMood extends Component {
    render() {
      const {moodData} = this.props
      return (
        <div className="save-mood">
          {
            moodData.map((data) => <Mood2 moodData = {data.mood} weatherData = {data.weather}/>)
          }
        </div>
      );
    }
  }
  
  export default SaveMood;