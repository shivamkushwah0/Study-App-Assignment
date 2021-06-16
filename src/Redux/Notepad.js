import {notes} from "../data/Notes";

export const Notes = (state = {notes : notes} , action) => {

    switch (action.type) {
        case "add-note" : { 
            const data = [{
                title : action.payload.title ,
                body : action.payload.body
            }]
            console.log(state)
            return  {...state , notes : data.concat(state.notes)} ;
        }
        default : return state;
    }
}