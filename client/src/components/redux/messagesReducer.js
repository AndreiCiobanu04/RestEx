import {SET_MESSAGES} from './messagesTypes'

const initialState = {
    messages: []
}




 export const messagesReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_MESSAGES: return {
            ...state,
            messages: action.payload
        }
    }
}

