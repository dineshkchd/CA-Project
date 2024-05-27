import { BOOK_SLOTS } from "../actions/type";

const initialState= {
    book_slot: []
}

export default (state = initialState, action) => {
    const { type, payload } = action;

    switch (type){
        case BOOK_SLOTS:
            console.log("payload",payload)
        return {
           ...state,
            book_slot: payload
        }
        default:{
            return state;
        }
    }
}



