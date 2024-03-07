
export const multiFormService = {
    getEmptyMultiForm,
}



function getEmptyMultiForm() {
    const multiForm = {
        username: '',
        email: '',
        phone: ''
    }

    return multiForm
}