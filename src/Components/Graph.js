import React from "react";
import {AreaChart} from 'react-chartkick';
import 'chart.js'

const Graph = (props) => {
    
    const options = {
        data : {
            "27": 40, "28": 80 , "1":100 , "2": 60 , "3":40 , "4":150  
        },
        xtitle : "February  March",
        maxy  : "500",
        width  : "230px",
        height  :"200px",
        suffix : "%"

    }

    return (
        <div className ="Graph">
            <AreaChart data={options.data}
            xtitle={options.xtitle}
            maxy = {options.maxy}
            width = {options.width}
            height = {options.height}
            suffix = {options.suffix}
            
            />
        </div>
    )
}

export default Graph;