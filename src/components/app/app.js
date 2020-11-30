import React, {Component} from 'react'
import AppHeader from "../app-header";
import PostAddForm from "../post-add-form";
import PostList from "../post-list/post-list";
import SearchPanel from "../search-panel/search-panel";
import './app.css'
import PostStatusFilter from "../post-status-filter/post-status-filter";


export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data : [
                {id:1, label:'label 1', important: false},
                {id:2, label:'label 2', important: true},
                {id:3, label:'label 3', important: true}
            ]
        }

    }

    deleteItem = (id) => {
        const newArr = this.state.data.filter(item => item.id !== id)
        this.setState({data: newArr})
        console.log(this.state.data)
    }

    addItem = (body, important = false) => {
        const newPost = {id: this.state.data.length, label: body, important: important}
        console.log(newPost)
        this.setState({data: [...this.state.data,newPost]})
    }

    render() {
        return(
            <div className="app">
                <AppHeader/>
                <div className="search-panel d-flex">
                    <SearchPanel/>
                    <PostStatusFilter/>
                </div>
                <PostList items = {this.state.data} onDelete={this.deleteItem} />
                <PostAddForm addItem={this.addItem}/>
            </div>
        )
}

}
