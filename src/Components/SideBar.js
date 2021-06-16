import React from "react";



const SideBar = () => {

    return (
        <div className="sideBar">
            <div className = "info-tabs active" type="button" >
                <img src="/assets/images/dashboard.svg" height = {25} width={25} alt="logo"/>
                <a className = "sideBarElements ml-2" href="/home"> Dashboard </a>
            </div>
            <div className = "info-tabs"  type="button">
            <img src="/assets/images/Lorem.svg"  height = {25} width={25} alt="logo"/>
                <a className = "sideBarElements ml-2" href="#"> Lorem </a>
            </div>
            <div className = "info-tabs"  type="button">
                <img src="/assets/images/Ipsum.svg" height = {25} width={25} alt="logo"/>
                <a className = "sideBarElements ml-2" href="#">  Ipsum </a> 
            </div>
        </div>
        )
}

export default SideBar;