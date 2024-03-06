import { useState } from "react"
import MultiFormLeftSide from "./MultiFormLeftSide"
import MultiFormRightSide from "./MultiFormRightSide"

export default function MultiFormContainer() {
    const [multiFormState, setMultiFormState] = useState(0)

    function moveActive(num) {
        setMultiFormState(prevmultiFormState => num)
    }


    return (
        <section className="multi-form-container">

            <MultiFormLeftSide moveActive={moveActive} multiFormState={multiFormState} />

            <MultiFormRightSide moveActive={moveActive} multiFormState={multiFormState}/>

        </section>
    )
}