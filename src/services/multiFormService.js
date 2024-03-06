
export const multiFormService = {
    getEmptyMultiForm,
}



function getEmptyMultiForm() {
    const multiForm = {
        name: '',
        email: '',
        phone: ''
    }

    return multiForm
}