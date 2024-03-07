import { store } from './store'
import { UPDATE_MULTIFORM } from "./multiFormReducer"


export default function updateFirstStepMultiForm(multiForm) {

    const newMultiForm = {
        username: multiForm.username,
        email: multiForm.email,
        phone: multiForm.phone,
        plan: {
            monthly: null,
            yearly: null,
            catagory: []
        }
    }

    store.dispatch({ type: UPDATE_MULTIFORM, newMultiForm })
}