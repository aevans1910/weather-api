import React, {Component} from 'react'

import './Form.css'

export default class Form extends Component {
    constructor(props) {
        super(props)
        this.state = { zip: "" }
    }

    handleChange(e) {
        this.setState({ zip: e.target.value })
        this.props.handleInputChange(e.target.value)
    }

    render () {
        return (
            <form onSubmit={e => this.props.handleSubmit(e)}>
                <input 
                    value={this.state.zip} 
                    onChange={e => this.handleChange(e)}
                    type="text" 
                    pattern="(\d{5}([\-]\d{4})?)"
                    placeholder="enter zip"
                />
                <button type="submit">Submit</button>
            </form>
        )
    }
}