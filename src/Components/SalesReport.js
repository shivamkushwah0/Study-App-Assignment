import React from "react";
import {LineChart} from 'react-chartkick';
import 'chart.js'

const SalesReport = () => {

    const graph_options = {
        data:[
            {"name":"Item_1", "data": {"0": 0, "8": 8 , "16":20 , "24": 25 , "30":40 }},
            {"name":"Item_2", "data": {"0": 0, "8": 6, "16":10 , "24": 15 , "30":20  }},
            {"name":"Item_3", "data": {"0": 0, "8": 10, "16":16 , "24": 34 , "30":45  }}
          ],
        xmin :"0" ,
        xmax:"30",
        xtitle:"Date",
        ytitle:"Increment in percentage",
        colors:[
            "#FFE700" , "#826AF9" , "#FF6C40"
        ] ,
        height: "365px" ,
        width : "755px" ,
        discrete:true,
        legend:false,
        suffix:"%",
        download:true,
    }

    return (
        <div className ="SalesReport container-fluid">
                <div className="row">
                <div className = "col-9">
                    
                        <h4 className="Heading">Sales Report <small className="text-muted">September 2020</small></h4>
                        <div className="ml-3 mt-3">
                        <LineChart 
                        data={graph_options.data}
                        xmin={graph_options.xmin}
                        xmax={graph_options.xmax}
                        xtitle={graph_options.xtitle}
                        ytitle={graph_options.ytitle}
                        // width={graph_options.width}
                        height={graph_options.height}
                        discrete={graph_options.discrete}
                        legend={graph_options.legend}
                        suffix={graph_options.suffix}
                        download={graph_options.download}
                        />
                        </div>

                </div>
                <div className="col-3 graph-extra-info">
                    <div className="date-box">
                        17 Dec
                    </div>
                    <div className="revenue-box">
                        $1,204.33
                        <br />
                        <br />
                        Revenue
                    </div>
                    <div className ="quotation-box">
                        33
                        <br />
                        <br />
                        Quotations
                    </div>
                    
                </div>
                </div>
                
        </div>
    )
}

export default SalesReport;