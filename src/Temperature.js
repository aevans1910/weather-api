import React, {Component} from 'react'

export default class Temperature extends Component {
    constructor(props) {
        super(props)
        this.state = { unit: "imperial" }
    }
    render() {
        let temp = this.props.temp
        if (this.state.unit === "metric") {
            temp = temp + "C"
        } else {
            temp = temp + "F"
        }
        return (
            <div className="temp">{temp}</div>
        )
    }
}