import { useState } from "react"
import { multiFormService } from "../services/multiFormService"


export default function MultiFormRightSideSecondStep() {
    const [multiFormSecondState, SetMultiFormSecondState] = useState(multiFormService.getEmptyMultiFormSecondStep())

    return (
        <section className="mtc-right-second-step">
            <div className="mtc-right-second-content">

                <h2>Select your plan</h2>
                <p>You have the option of monthly or yearly billing</p>

                <div className="card-container">

                    <div className="card">
                        <img src="" alt="" />
                        <h4>Arcade</h4>
                        <p>$9/mo</p>
                    </div>

                    <div className="card">
                        <img src="" alt="" />
                        <h4>Advanced</h4>
                        <p>$12/mo</p>
                    </div>

                    <div className="card">
                        <img src="" alt="" />
                        <h4>Pro</h4>
                        <p>$15/mo</p>
                    </div>






                </div>


            </div>

        </section>
    )
}