import { useState } from "react"
import MultiFormLeftSide from "./MultiFormLeftSide"

export default function MultiFormContainer() {
    const [multiFormState, setMultiFormState] = useState(0)

    return (
        <section className="multi-form-container">


            <section className="left-side-mtc">

                <MultiFormLeftSide />


            </section>


            <section className="right-side-mtc">


            </section>




        </section>
    )
}