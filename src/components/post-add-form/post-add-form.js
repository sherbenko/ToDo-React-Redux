import React, {Component} from 'react'
import './post-add-form.css'

export default class PostAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            postValue:''
        }
    }

    handleChange = (e) => {
        this.setState ({postValue: e.target.value});
        console.log(this.state.postValue)
    }

    render() {
        const {addItem} =this.props;
        const {postValue} = this.state;
        return (
            <form className="bottom-panel d-flex">
                <input
                    type="text"
                    placeholder="О чем вы думаете сейчас?"
                    className="form-control new-post-label"
                    onChange={this.handleChange}
                />
                <button
                    type="button"
                    className="btn btn-outline-secondary"
                    onClick={() => addItem(postValue)}
                >
                    Добавить</button>
            </form>
        )

    }

}

