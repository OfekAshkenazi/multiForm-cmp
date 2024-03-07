
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
            monthly: null,
            yearly: null,
            catagory: ""
        }
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