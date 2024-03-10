import { useSelector } from "react-redux"
import BtnBox from "./BtnBox"
import { useEffect, useState } from "react"
import { updateThirdStep } from "../store/multiFormActions"


export default function MultiFormRIghtSidetThirdStep({ moveActive, multiFormState }) {
    const storeMultiForm = useSelector((storeState => storeState.multiFormModule.multiForm))
    const [addOns, setAddOns] = useState([])


    function handleAddOnes(ev) {
        const idx = addOns.indexOf(ev.target.name)
        idx >= 0 ? addOns.splice(idx, 1) : addOns.push(ev.target.name)
    }

    function onUpdateThirdStep() {
        updateThirdStep(storeMultiForm, addOns)
    }

    return (
        <section className="mtc-right-third-step">
            <div className="mtc-right-third-content">
                <h2>Pick add-ons</h2>
                <p>Add-one help enhance your gaming experience.</p>

                <div className="add-ones-container">

                    <div className="add-one">

                        <div className="add-one-left">

                            <input type="checkbox" name="online-service" id="" onChange={(ev) => handleAddOnes(ev)} />
                            <div className="">
                                <h4>Online service</h4>
                                <p>Access to multiplayer games</p>
                            </div>

                        </div>

                        <p className="add-one-right">{storeMultiForm.plan.monthly ? '+$1/mo' : '+$10/yr'}</p>
                    </div>

                    <div className="add-one">

                        <div className="add-one-left">

                            <input type="checkbox" name="larger-stoarge" id="" onChange={(ev) => handleAddOnes(ev)} />
                            <div className="">
                                <h4>Larger storage</h4>
                                <p>Extra 1TB of cloud save</p>
                            </div>

                        </div>

                        <p className="add-one-right">{storeMultiForm.plan.monthly ? '+$2/mo' : '+$20/yr'}</p>
                    </div>

                    <div className="add-one">

                        <div className="add-one-left">

                            <input type="checkbox" name="customizable-profile" id="" onChange={(ev) => handleAddOnes(ev)} />
                            <div className="">
                                <h4>Customizable profile</h4>
                                <p>Custom theme on your profile</p>
                            </div>

                        </div>

                        <p className="add-one-right">{storeMultiForm.plan.monthly ? '+$2/mo' : '+$20/yr'}</p>
                    </div>





                </div>

            </div>


            <BtnBox moveActive={moveActive} multiFormState={multiFormState} next={onUpdateThirdStep} />


        </section>
    )
}