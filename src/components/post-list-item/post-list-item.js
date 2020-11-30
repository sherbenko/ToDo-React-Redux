import React, {Component} from 'react'
import './post-list-item.css'



export default class PostListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            important: false,
            like: false
        }
    }
     toggleImportant = () => {
        this.setState(({important}) => ({
            important:!important
        }))
    }
    toggleLike = () => {
        this.setState(({like}) => ({
            like:!like
        }))
    }
    render() {
        const {important, like} = this.state;
        const {label, onDelete} = this.props;
        let classNames = "app-list-item d-flex justify-content-between";
        if (important) {
            classNames += ' important';
        }
        if (like) {
            classNames += ' like';
        }
        return(
            <div className={classNames}>
            <span className="app-list-item-label" onClick={this.toggleLike}>
               {label}
            </span>
                <div className="d-flex justify-content-center align-items-center">
                    <button className="btn-star btn-sm"
                    onClick={this.toggleImportant}>
                        <i className="fa fa-star"/>
                    </button>
                    <button className="btn-trash btn-sm" onClick={onDelete}>
                        <i className="fa fa-trash-o"/>
                    </button>
                    <i className="fa fa-heart"/>
                </div>
            </div>
        )
    }

}