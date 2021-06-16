import React from "react";
import {Input} from "reactstrap"

const SearchBar = () => {

    return (
        <div className = "SearchBar ">
            <div>
            <i className="fa fa-search"/> 
            </div>
            <div className="input">
            <Input placeholder="Search" className="col-12 Search" />
            </div>          
        </div>
    )
}

export default SearchBar;