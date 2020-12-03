import React, {Component} from 'react';
import './post-list-item.css';




 class PostListItem extends Component {

    render() {
        const {label, onDelete, onToggleImportant, onToggleLike, important, like} = this.props;
        let classNames = "app-list-item d-flex justify-content-between";
        if (important) {
            classNames += ' important';
        }
        if (like) {
            classNames += ' like';
        }
        return(
            <div className={classNames}>
            <span className="app-list-item-label" onClick={onToggleLike}>
               {label}
            </span>
                <div className="d-flex justify-content-center align-items-center">
                    <button className="btn-star btn-sm"
                    onClick={onToggleImportant}>
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


export default PostListItem;


