import React, {Component} from 'react'

export default class Mood extends Component {
    constructor(props) {
        super(props)
        this.state = { mood: "" }
    }

    render () {
        return (
            <form onSubmit={e => this.props.handleSubmit(e, this.state.mood)}>
                <input 
                    value={this.state.mood} 
                    onChange={e => this.setState({ mood: e.target.value })}
                    type="text" 
                    placeholder="enter mood"
                />
                <button type="submit">Submit</button>
            </form>
        )
    }
}