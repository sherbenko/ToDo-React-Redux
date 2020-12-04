import React, {Component} from 'react'
import NavBar from "../navbar/nav-bar";
import  {Route, Switch} from "react-router-dom";
import './app-styles.css'

import ToDoList from "../todo-list/todo-list";
import Login from "../login-form/login";


class App extends Component {
    render() {
        return (
            <div className="app">
                <div className="app-wrapper">
                    <nav className='nav'>
                        <NavBar/>
                    </nav>
                    <div className='content'>
                        <Switch>
                            <Route path={'/login'} component={Login}/>
                            <Route path={'/tasks'} component={ToDoList}/>
                        </Switch>

                    </div>
                </div>
            </div>
        )
    }

}


export default App;
