
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
            catagory: ["Aracde", "Advanced", "Pro"]
        }
    }

    return multiForm
}

function getEmptyMultiFormSecondStep() {
    const multiForm = {
        plan: {
            monthly: null,
            yearly: null,
            catagory: ["Aracde", "Advanced", "Pro"]
        }
    }

    return multiForm
}