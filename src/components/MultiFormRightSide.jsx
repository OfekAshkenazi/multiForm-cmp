import { useSelector } from "react-redux"

export default function MultiFormRightSide({ setMultiFormState, moveActive }) {

    const multiForm = useSelector((storeState => storeState.multiFormModule.multiForm))

    console.log(multiForm)

    return (
        <section>
            <h4>Personal info</h4>
            <p>Please provide your name,email address and phone number</p>

            <label>

                <input type="text" />
            </label>

            <label>

                <input type="text" />
            </label>

            <label>

                <input type="text" />
            </label>


        </section>
    )

}