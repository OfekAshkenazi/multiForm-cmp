import { useState } from "react"
import MultiFormLeftSide from "./MultiFormLeftSide"
import MultiFormRightSideFirstStep from "./MultiFormRightSideFirstStep"
import MultiFormRightSideSecondStep from "./MultiFormRightSideSecondStep"
import MultiFormRIghtSidetThirdStep from "./MultiFormRIghtSidetThirdStep"

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

            {multiFormState === 1 && <MultiFormRightSideFirstStep moveActive={moveActive} />}
            {multiFormState === 2 && <MultiFormRightSideSecondStep moveActive={moveActive} multiFormState={multiFormState}/>}
            {multiFormState === 3 && <MultiFormRIghtSidetThirdStep moveActive={moveActive} multiFormState={multiFormState}/>}

        </section>
    )
}