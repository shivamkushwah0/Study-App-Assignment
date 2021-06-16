import React ,{useState} from "react";
import { TabContent, TabPane, Nav, NavItem, NavLink ,  Row } from 'reactstrap';




const NotificationBar = (props) => {
    
    
    console.log(props)

    const [active, setActive] = useState(true);


    const toggle =() => {
    setActive(!active);
    }


const Loader = (props) => {

    const list = props.dataarray.map((data) => {
        return (
            <>
            
            <div className = "single-data-loader" >
                <div className = "image-loader">
                <img src={data.image} 
                height = {40} 
                width={40}
                alt="user"
                />
                </div>
                <div className="data-loader">
                <div className="note-title">{data.title}</div>
                <div className="note-body">{data.body}</div>
                <div className="note-time">{data.time}</div>   
                </div>
                
            </div>
            <hr width={250}/>
            </>
        )
    })
    return (
        <div classsName = "container datas-loader">
            {list}
        </div>
    )
}

return (
<div className ="NotificationBar container-fluid">
    <Nav tabs>
    <Row className="flex-container">
    <NavItem className="flex-1">
    <NavLink
    className={active ? "active" : null}
    onClick={toggle}
    >
        Notifications
    </NavLink>
</NavItem>
<NavItem className="flex-1">
    <NavLink
    className={!active ? "active" : null}
    onClick={toggle}
    >
    Events
    </NavLink>
</NavItem>
    </Row>    
</Nav>

<TabContent activeTab={active ? "1" : "2"} className="TabContent">
    <TabPane tabId="1">
        <Row>
        <Loader dataarray={props.notifications} />
        </Row>
    </TabPane>
    <TabPane tabId="2">
        <Row>
        
        <Loader dataarray={props.events} />
        </Row>
    </TabPane>
    </TabContent>
    <div className="view-all-tab">
    
    <a href="/conversation" type="button" className="text-muted">View All</a>
    </div>
   
</div>
)
}

export default NotificationBar;