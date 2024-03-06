export const UPDATE_MULTIFORM = 'UPDATE_MULTIFORM'

import { multiFormService } from "../services/multiFormService"


const initialState = {
    multiForm: multiFormService.getEmptyMultiForm() 
}

export function multiFormReducer(state = initialState, action) {
    var newState = state
    switch (action.type) {
        case UPDATE_MULTIFORM:
            newState = { ...state, multiForm: action.multiForm }
            break

        default:
    }

    return newState

}
