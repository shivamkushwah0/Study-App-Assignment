import React , {useState , useReducer} from "react";
import {Button , Modal , ModalHeader , ModalBody ,ModalFooter , Input , Form , Label} from "reactstrap";



const NotePad = (props) => {
    const [modal , setmodal]= useState(false)
    const toggle = () => {
        setmodal(!modal)
    }
    const reducer = (state , action ) => {
        switch (action.type) {
            case "title" :
                return {...state , title : action.payload}
            case "note" :
                return {...state , note : action.payload}
            default : return state ;
        }
    }
    const [state , dispatch] = useReducer(reducer , {
        title : "",
        note : ""
    })
    const add_note = props.add_note;
    
    const handleSubmit = (event) => {
        toggle();
        add_note({
            type:"add-note" ,
            payload : {
                title : state.title,
                body : state.note
            }
        })
        event.preventDefault();
    }
    const handleChange = (event) => {
        dispatch({type:event.target.name , payload : event.target.value })
    }
    const list = props.notes.map((note) => {
        return (
            <div className="note-style">
                <span className="font-weight-bold">{note.title}</span> <span className="text-muted">{note.body}</span>
            </div>
        )
    })
    return (
        <div className="notePad">
            <h4 className="font-weight-light note-pad-heading"> Notepad </h4>
            <div className="notepad-content">
            {list}
            </div>
            
           
                <Button className ="add-button" onClick={toggle}><i className = "fa fa-plus fa-2x" /></Button>
                <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>
                    <h4>Add Note</h4>
                </ModalHeader>
                <ModalBody>
                    <Form className="container" onSubmit={(v)=>handleSubmit(v)}>
                        <div className="row">
                        <Label htmlFor="title" className="col-2">Title</Label>
                    <Input required type="text" id="title" name="title" className="col-10 bg-light"
                    onChange={handleChange}
                    />
                        </div>
                
                <Label htmlFor="note">Note</Label>
                    <Input required type="textarea" id="note" name="note" className="bg-light"
                        onChange={handleChange}
                    />
                    <Button className="float-right submit-button p-2" type="submit">Submit</Button>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button className="bg-secondary" onClick={toggle}>Close</Button>
                </ModalFooter> 
                </Modal>
          </div>
    )
}

export default NotePad;
