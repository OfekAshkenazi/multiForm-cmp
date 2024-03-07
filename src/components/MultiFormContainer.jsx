import { useState } from "react"
import MultiFormLeftSide from "./MultiFormLeftSide"
import MultiFormRightSide from "./MultiFormRightSide"

export default function MultiFormContainer() {
    const [multiFormState, setMultiFormState] = useState(1)

    function moveActive(num) {
        if (num) setMultiFormState(prevmultiFormState => num)
        else {
            setMultiFormState(prevmultiFormState => prevmultiFormState >= 4 ? prevmultiFormState = 1 : prevmultiFormState + 1)
        }
    }


    return (
        <section className="multi-form-container">

            <MultiFormLeftSide moveActive={moveActive} multiFormState={multiFormState} />

            {multiFormState === 1 && <MultiFormRightSide moveActive={moveActive} multiFormState={multiFormState} />}

        </section>
    )
}