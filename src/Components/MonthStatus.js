import React from "react";


const MonthStatus = (props) => {

    return (
        <div className ="status">
            {props.title} 
            <hr />
            <span className ="growth">{props.growth}</span>
            <i className = "fa fa-line-chart fa-2x" />
            
        </div>
    )
}

export default MonthStatus;