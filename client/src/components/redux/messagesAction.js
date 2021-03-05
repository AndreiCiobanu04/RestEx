

import {SET_MESSAGES} from './messagesTypes'

export const setMessagesAction = (messages) => {
    return {
        type: SET_MESSAGES,
        payload: messages

    }
}




