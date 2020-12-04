import React, {Component} from 'react'
import './search-panel.css'

class SearchPanel extends Component {

    onUpdateSearch = (e) => {
        const term = e.target.value;
        this.props.onUpdateSearch(term, this.props.filter);
    }

    render() {
        return (
            <input
                className="form-control search-input"
                type="text"
                placeholder="Поиск по записям"
                value={this.props.searchValue}
                onChange={this.onUpdateSearch}
            />
        )
    }
};

export default (SearchPanel);