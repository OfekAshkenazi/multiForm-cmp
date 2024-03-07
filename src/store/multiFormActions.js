import { store } from './store'
import { UPDATE_MULTIFORM } from "./multiFormReducer"


export default function updateFirstStepMultiForm(multiForm) {
    store.dispatch({ type: UPDATE_MULTIFORM, multiForm })
    return console.log('sucess')
}