import React from "react";
import Graph from "../Components/Graph";
import Inbox from "../Components/Inbox";
import MonthStatus from "../Components/MonthStatus";
import NotePad from "../Components/NotePad";
import SalesReport from "../Components/SalesReport";
import SearchBar from "../Components/SearchBar";
import SideBar from "../Components/SideBar";
import {Row} from "reactstrap";
import NotificationBar from "../Components/NotificationBar";



const HomePage = (props) => {

    return (
        <Row>
               <div className = "col-8 p-0">
                <SearchBar />
                <SalesReport /> 
                <Row className="">
                    <div className = "col-4">
                        <NotePad notes={props.notes} add_note={props.add_note} />
                    </div>
                    <div className = "col-4 p-0">
                        <Graph />
                        <Inbox />
                    </div>
                    <div className = "col-4 ">
                        <MonthStatus title="This Month" growth="+7.8%" />
                        <MonthStatus title ="Last Month" growth="+67.4%" />
                    </div>
                </Row >
               </div>
               <div className = "col-4 ">
                   <NotificationBar notifications = {props.notifications} events={props.events} />
               </div>
          </Row>
    )
}

export default HomePage;