// import { CHANGE_NAME } from '../actions/textAction'

//initial state
const initialValue ={
    text : "Friends"
}

//reducer (state,action)
const textReducer = (state=initialValue , action) => {
    switch(action.type){
        case "CHANGE_NAME":
            return {
                ...state,
                text: "Shruti"
            };

        default:
            return state;
    }

}

export default textReducer;