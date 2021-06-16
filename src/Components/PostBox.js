import React ,{useState} from "react";
import {Input , Label ,Button , Form, ButtonGroup} from 'reactstrap';
const PostBox = (props) => {

    const [post , setPost] = useState("")

    const add_post = props.add_post
    const handleSubmit = (e) => {
        add_post(
            {
                type: "add" ,
                payload : post 
            }
        );
        e.preventDefault();
        setPost("");
    } 
    const handleChange = (event) => {
        setPost(event.target.value);
    }

    return (
        <div className = "PostBox" >
            <Form onSubmit={(e) => handleSubmit(e)}>
            <Label className="InputArea">
                <Input type="textarea" name="post" placeholder="Share Something with your class" required={true}
                onChange = {handleChange} value={post}
                />
                
            </Label>
            <br />
            <ButtonGroup>
            <Button className="cancel-button" onClick={() => {setPost("")}}>
                Cancel
            </Button>
            </ButtonGroup>
            <ButtonGroup className="float-right">
            <Button className="attachment-button" >
                <i className="fa fa-paperclip fa fa-reverse" />
            </Button >
            <Button type="submit" className="submit-button btn-lg">
                Share
            </Button>
            <Button className="dropdown-button">
                <i className="fa fa-angle-down " />
            </Button>
            </ButtonGroup>
            </Form>
            
        </div>
    );

}

export default PostBox;
