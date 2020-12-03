import React, {Component} from 'react'
import AppHeader from "../app-header";
import PostAddForm from "../post-add-form";
import PostList from "../post-list/post-list";
import SearchPanel from "../search-panel/search-panel";
import './app.css'
import PostStatusFilter from "../post-status-filter/post-status-filter";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {filterPost, searchPost} from "../../actions/postActions";


class App extends Component {

    render() {
        const {posts, filter, filtered, term, isChanged, searchPost, filterPost, postValue} = this.props;
        const countLike = posts.filter(item => item.like).length;
        const countPost = posts.length;
        const filteredPosts = isChanged ? filtered : posts;

        return (
            <div className="app">
                <AppHeader countLike={countLike}
                           countPost={countPost}/>
                <div className="search-panel d-flex">
                    <SearchPanel
                        filter={filter}
                        searchValue={term}
                        onUpdateSearch={searchPost}/>
                    <PostStatusFilter
                        filter={filter}
                        data={filteredPosts}
                        onFilterSelect={filterPost}/>
                </div>
                <PostList
                    posts={filteredPosts}
                />
                <PostAddForm
                    postValue={postValue}
                />
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    const {posts, filter, filtered, term, isChanged, postValue} = state
    return {
        posts,
        filter,
        filtered,
        term,
        isChanged,
        postValue
    }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        searchPost,
        filterPost
    }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(App)
