import { useEffect, useState } from "react"
import { multiFormService } from "../services/multiFormService"

import ArcadeImg from "../assets/images/icon-arcade.svg"
import AdvancedImg from "../assets/images/icon-advanced.svg"
import ProImg from "../assets/images/icon-pro.svg"
import BtnBox from "./BtnBox"
import { useSelector } from "react-redux"
import { updateSecondStep } from "../store/multiFormActions"


export default function MultiFormRightSideSecondStep({ moveActive, multiFormState }) {
    const [multiFormSecondState, SetMultiFormSecondState] = useState(multiFormService.getEmptyMultiFormSecondStep())
    const [isActive, setIsActive] = useState(true)
    const storeMultiForm = useSelector(storeState => storeState.multiFormModule.multiForm)
    // for toggle btn

    useEffect(() => {
        console.log('trigger')
    }, [isActive])

    function handleClick() {
        setIsActive(!isActive)

        
        SetMultiFormSecondState(prevmultiFormSecondState => ({
            ...prevmultiFormSecondState,
            monthly: !isActive,
            yearly: isActive
        }))
    }

    function handleChangePlanCatagory(Plan) {
        SetMultiFormSecondState(prevmultiFormSecondState => ({ ...prevmultiFormSecondState, catagory: Plan }))

    }

    function handleNextPageSecondStep() {
        updateSecondStep(storeMultiForm, multiFormSecondState)
    }


    return (
        <section className="mtc-right-second-step">
            <div className="mtc-right-second-content">

                <h2>Select your plan</h2>
                <p>You have the option of monthly or yearly billing</p>

                <div className="card-container">

                    <div className={`card ${multiFormSecondState.catagory === 'Arcade' && 'active'}`} onClick={() => handleChangePlanCatagory("Arcade")}>
                        <img src={ArcadeImg} alt="" />
                        <div className="">
                            <h4>Arcade</h4>
                            <p>$9/mo</p>
                        </div>
                    </div>

                    <div className={`card ${multiFormSecondState.catagory === 'Advanced' && 'active'}`} onClick={() => handleChangePlanCatagory("Advanced")}>
                        <img src={AdvancedImg} alt="" />
                        <div>
                            <h4>Advanced</h4>
                            <p>$12/mo</p>
                        </div>
                    </div>

                    <div className={`card ${multiFormSecondState.catagory === 'Pro' && 'active'}`} onClick={() => handleChangePlanCatagory("Pro")}>
                        <img src={ProImg} alt="" />
                        <div className="">
                            <h4>Pro</h4>
                            <p>$15/mo</p>
                        </div>
                    </div>

                </div>

                <div className="second-step-under-cards-area">

                    <span className={`${isActive ? 'active' : ''}`}>Monthly</span>

                    <button className={`toggle-button ${!isActive ? 'active' : ''}`} onClick={handleClick}>
                        <div className="ball"></div>
                    </button>

                    <span className={`${!isActive ? 'active' : ''}`}>Yearly</span>

                </div>


            </div>

            <BtnBox moveActive={moveActive} multiFormState={multiFormState} handleNextPageSecondStep={handleNextPageSecondStep} />

        </section>
    )
}