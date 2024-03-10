import { store } from './store'
import { UPDATE_MULTIFORM } from "./multiFormReducer"


export function updateFirstStepMultiForm(updatemultiForm) {

    const multiForm = {
        username: updatemultiForm.username,
        email: updatemultiForm.email,
        phone: updatemultiForm.phone,
        plan: {
            monthly: updatemultiForm.plan.monthly,
            yearly: updatemultiForm.plan.yearly,
            catagory: updatemultiForm.plan.catagory
        },
        addOnes: updatemultiForm.addOnes || []
    }

    store.dispatch({ type: UPDATE_MULTIFORM, multiForm })
}

export function updateSecondStep(multiFormFront, isActive) {
    console.log(isActive)
    const multiForm = {
        username: multiFormFront.username,
        email: multiFormFront.email,
        phone: multiFormFront.phone,
        plan: {
            monthly: isActive === true ? true : false,
            yearly: isActive === true ? false : true,
            catagory: multiFormFront.plan.catagory
        },
        addOnes: multiFormFront.addOnes || []
    }

    store.dispatch({ type: UPDATE_MULTIFORM, multiForm })
}

export function updateThirdStep(multiFormStore, updateAddOns) {

    const multiForm = {
        username: multiFormStore.username,
        email: multiFormStore.email,
        phone: multiFormStore.phone,
        plan: {
            monthly: multiFormStore.plan.monthly,
            yearly: multiFormStore.plan.yearly,
            catagory: multiFormStore.plan.catagory
        },
        addOnes: multiFormStore.addOnes.length >= 1 && multiFormStore.addOnes || updateAddOns || []
    }

    store.dispatch({ type: UPDATE_MULTIFORM, multiForm })
}