import React from "react";
import {Input , Row} from "reactstrap"

const ConversationBox = (props) => {

    const RenderConversation = (props) => {
        var item_to_render = props.data.map((data) => {
            return (
                <>
                <div className="conversationBox">
                 <div className="container-fluid">
                     <div className="row">
                     <div className="image-box col-1">
                        <img src={data.image} height={50} width={50}  alt="user"/>
                    </div>
                     
                <div className="col-11">
                <div className="bodyBox">
                    <div className="row">
                    <div className = "body-title float-left col-10">
                        {data.title}
                    </div>
                    <div className="body-date col-1 text-muted">
                        {data.time}
                    </div>
                    </div>
                    
                    <div className="body-text">
                        {data.body}
                    </div>
                    
                 </div>
                </div>
                </div>
                 </div>
                 
            </div>
            <Row className="input-text">
                   
                    <Input  type="textarea" placeholder="Write your comment" className="col-11"/>
                    <div className="col-1 send-button" type="button">
                    <i  className="fa fa-paper-plane fa-2x " />
                    </div>
                     
                   
                     
                 </Row>
            </>
            )
        })

        return item_to_render
    }

    return (
        <>
        <RenderConversation data={props.conversations} />
        </>
    );

}

export default ConversationBox;
