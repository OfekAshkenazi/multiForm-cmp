import { useState } from "react"
import { multiFormService } from "../services/multiFormService"
import updateFirstStepMultiForm from "../store/multiFormActions"
import { useSelector } from "react-redux"

export default function MultiFormRightSideFirstStep({moveActive}) {
    const multiForm = useSelector(storeState => storeState.multiFormModule.multiForm)
    const [multiFormFirstState, SetMultiFormFirstState] = useState(multiForm ? multiForm : multiFormService.getEmptyMultiForm())

    function handleChange(ev) {
        const field = ev.target.name
        const value = ev.target.value
        SetMultiFormFirstState({ ...multiFormFirstState, [field]: value })
    }

    function onAddFirstStep(ev) {
        if (ev) ev.preventDefault()
        updateFirstStepMultiForm(multiFormFirstState)

    }

    function handleMoveToNextPage() {
        if (multiFormFirstState.username.length >= 1
            && multiFormFirstState.email.length >= 1
            && multiFormFirstState.phone.length >= 1) {
            onAddFirstStep()
            moveActive()
        } else {
            moveActive()
        }

    }


    return (
        <section className="mtc-right-first-step" >

            <div className="mtc-right-content">

                <h2>Personal info</h2>
                <p>Please provide your name,email address and phone number</p>

                <form onSubmit={(ev) => onAddFirstStep(ev)}>

                    <label className="flex column">
                        Name
                        <input
                            type="text"
                            onChange={handleChange}
                            name={'username'}
                            value={multiFormFirstState.username}
                            placeholder="e.g. Stephen king"
                            required
                        />
                    </label>

                    <label className="flex column">
                        Email Address
                        <input type="text"
                            onChange={handleChange}
                            name={'email'}
                            value={multiFormFirstState.email}
                            placeholder="e.g. ofeka18@gmail.com"
                            required
                        />
                    </label>

                    <label className="flex column">
                        Phone Number
                        <input type="text"
                            onChange={handleChange}
                            name={'phone'}
                            value={multiFormFirstState.phone}
                            placeholder="e.g. +972 543666455"
                            required
                        />
                    </label>

                    <button hidden={true}></button>
                </form>
            </div>

            <button className="move-state-btn" onClick={() => handleMoveToNextPage()}>Next Step</button>

        </section>
    )

}