import React , {Component} from "react";
import HomePage from "./HomeScreen";
import {notifications} from "../data/Notifications"
import {events} from "../data/Events"
import ConverSationScreen from './ConverSationScreen';
import {Redirect, Switch , withRouter , Route} from "react-router-dom";
import {connect} from 'react-redux';
import SideBar from "../Components/SideBar";

const mapStateToProps = state => {
  
    return {
      notes : state.notes ,
      conversations : state.conversations,
      events : events ,
      notifications : notifications
      
    }
    
  }

  const mapDispatchToProps = (dispatch) => {
        return (
            {
                add_note: (action) => {dispatch(action)} , 
                add_post : (action) => {dispatch(action)}
            }
        )
  }

class Main extends Component {
    
    render() {
        console.log(this.props)
        return (
            <div className="container-fluid" >
                <div className ="row p-0">
                    <div className="col-2 p-0">
                        <SideBar />
                    </div>
                    <div className = "col-10 p-0">
                    <Switch >
                        <Route  path="/home" component={() => { return <HomePage 
                        notes={this.props.notes.notes} 
                        notifications = {this.props.notifications} 
                        events = {this.props.events}
                        add_note = {this.props.add_note}
                        />   }} />
                        <Route path ="/conversation" component={()=> {return <ConverSationScreen conversations={this.props.conversations.conversations} add_post={this.props.add_post}/>}}/> 
                        <Redirect to="/home"/>
                        </Switch>
                    </div>
                
            
                </div>

               
            </div>
        )
    }
}

export  default withRouter(connect(mapStateToProps , mapDispatchToProps )(Main));
