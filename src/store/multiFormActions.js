import { store } from './store'
import { UPDATE_MULTIFORM } from "./multiFormReducer"


export function updateFirstStepMultiForm(updatemultiForm) {

    const multiForm = {
        username: updatemultiForm.username,
        email: updatemultiForm.email,
        phone: updatemultiForm.phone,
        plan: {
            monthly: true,
            yearly: false,
            catagory: ""
        }
    }

    store.dispatch({ type: UPDATE_MULTIFORM, multiForm })
}

export function updateSecondStep(updatemultiFormFirst, updatemultiFormSecond) {

    const multiForm = {
        username: updatemultiFormFirst.username,
        email: updatemultiFormFirst.email,
        phone: updatemultiFormFirst.phone,
        plan: {
            monthly: updatemultiFormSecond.monthly,
            yearly: updatemultiFormSecond.yearly,
            catagory: updatemultiFormSecond.catagory
        }
    }

    store.dispatch({ type: UPDATE_MULTIFORM, multiForm })
}

export function updateThirdStep(multiFormStore, updateAddOns) {

    const multiForm = {
        username: multiFormStore.username,
        email: multiFormStore.email,
        phone: multiFormStore.phone,
        plan: {
            monthly: multiFormStore.monthly,
            yearly: multiFormStore.yearly,
            catagory: multiFormStore.catagory
        },
        addOns: updateAddOns || []
    }

    store.dispatch({ type: UPDATE_MULTIFORM, multiForm })
}