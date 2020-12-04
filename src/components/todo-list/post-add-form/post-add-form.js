import React, {Component} from 'react'
import './post-add-form.css'
import {bindActionCreators} from "redux";
import {addPost, handleAddForm} from "../../../actions/postActions";
import {connect} from "react-redux";

class PostAddForm extends Component {


    handleChange = (e) => {
        this.props.handleAddForm(e.target.value)
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addPost(this.props.postValue)
    }

    render() {
        const {postValue} = this.props
        return (
            <form className="bottom-panel d-flex" onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    placeholder="О чем вы думаете сейчас?"
                    className="form-control new-post-label"
                    value={postValue}
                    onChange={this.handleChange}
                />
                <button
                    type="submit"
                    className="btn btn-outline-secondary"
                >
                    Добавить
                </button>
            </form>
        )
    }


}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        addPost,
        handleAddForm
    }, dispatch)

}
const mapStateToProps = (state) => {
    const {postValue} = state.postReducer;
    return {
        postValue
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(PostAddForm);

