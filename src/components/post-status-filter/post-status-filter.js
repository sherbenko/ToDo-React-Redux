import React, {Component} from 'react'
import './post-status-filter.css'
import {BUTTONS} from "../../constants/constants";




class PostStatusFilter extends Component {

    render() {
        const {filter, onFilterSelect,data} = this.props;

        const buttons = BUTTONS.map(({label, name}) => {
            const clazz = filter === name ? 'btn-info' : 'btn-outline-secondary'
            return (
                <button
                    key={name}
                    className={`btn ${clazz}`}
                    onClick={() => onFilterSelect(name,data)}

                >{label}</button>
            )
        })

        return (
            <div className="btn-group">
                {buttons}
            </div>
        )
    }
}

export default PostStatusFilter;
