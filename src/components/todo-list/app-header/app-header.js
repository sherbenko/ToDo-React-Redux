import React from 'react'
import './app-header.css'
const AppHeader = ({countLike, countPost}) => {
    return (
        <div className="app-header d-flex">
            <h1>Ilya Shcharbenka</h1>
            <h2>{countPost} записей, из них {countLike} понравилось</h2>
        </div>
    )
}
export default AppHeader;