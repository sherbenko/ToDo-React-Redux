import React from 'react'
import PostListItem from "../post-list-item";
import './post-list.css'
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {deletePost, onToggleImportant, onToggleLike} from "../../actions/postActions";


const PostList = ({posts, onToggleLike, deletePost,onToggleImportant}) => {

    // eslint-disable-next-line array-callback-return
    const elements = posts.map(item => {
        if (item.label) {
            const {id, ...itemProps} = item;
            return (
                <li key={id} className='list-group-item'>
                    <PostListItem {...itemProps}
                                  onDelete={() => deletePost(id)}
                                  onToggleImportant={() => onToggleImportant(id)}
                                  onToggleLike={() => onToggleLike(id)}
                    />
                </li>
            )
        }
    })

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}


const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        deletePost,
        onToggleImportant,
        onToggleLike
    },dispatch)
}
export default connect(null,mapDispatchToProps)(PostList);