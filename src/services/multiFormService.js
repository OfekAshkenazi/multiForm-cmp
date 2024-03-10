
export const multiFormService = {
    getEmptyMultiForm,
    getEmptyMultiFormSecondStep
}

function getEmptyMultiForm() {
    const multiForm = {
        username: '',
        email: '',
        phone: '',
        plan: {
            monthly: true,
            yearly: null,
            catagory: ""
        },
        addOns: []
    }

    return multiForm
}

function getEmptyMultiFormSecondStep() {

    const plan =  {
        monthly: true,
        yearly: false,
        catagory: ""
    }

    return plan
}