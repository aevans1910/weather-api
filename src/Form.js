import React, {Component} from 'react'

export default class Form extends Component {
    constructor(props) {
        super(props)
        this.state = { zip: "" }
    }

    render () {
        return (
            <form onSubmit={e => this.props.handleSubmit(e)}>
                <input 
                    value={this.state.zip} 
                    onChange={e => this.setState({ zip: e.target.value })}
                    type="text" 
                    pattern="(\d{5}([\-]\d{4})?)"
                    placeholder="enter zip"
                />

                <button type="submit">Submit</button>
            </form>
        )
    }
}