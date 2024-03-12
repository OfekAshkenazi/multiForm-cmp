import { useSelector } from "react-redux"
import BtnBox from './BtnBox';

export default function MultiFormRIghtSidetFourthStep({ moveActive, multiFormState }) {
    const storeMultiForm = useSelector((storeState => storeState.multiFormModule.multiForm))

    function sumPlanCost() {
        let sumPlanCost

        if (storeMultiForm.plan.catagory === "Arcade") {
            storeMultiForm.plan.monthly ? sumPlanCost = 9 : sumPlanCost = 90
            return sumPlanCost
        }
        if (storeMultiForm.plan.catagory === "Advanced") {
            storeMultiForm.plan.monthly ? sumPlanCost = 12 : sumPlanCost = 120
            return sumPlanCost
        }
        if (storeMultiForm.plan.catagory === "Pro") {
            storeMultiForm.plan.monthly ? sumPlanCost = 15 : sumPlanCost = 150
            return sumPlanCost
        } else {
            return sumPlanCost = 0
        }
    }

    function sumFormCost() {
        let sumAddOnesCost = storeMultiForm.addOnes.reduce((acc, addone) => {
            return addone === "online-service" ? acc + 1 : acc + 2
        }, 0)
        storeMultiForm.plan.monthly ? sumAddOnesCost = sumAddOnesCost : sumAddOnesCost += "0"
        let sumPlanCosts = sumPlanCost()
        const total = +sumPlanCosts + +sumAddOnesCost
        return total
    }

    return (
        <section className="mtc-right-fourth-step">
            <div className="mtc-right-fourth-content">
                <h2>Finishing up</h2>
                <p>Double-check everything looks OK before confirming.</p>

                <div className="finishing-up-container">

                    <div className="multiForm-p-c-container flex space-bet">
                        <div className="multiForm-p-c-left">
                            <p>{`${storeMultiForm.plan.catagory} (${storeMultiForm.plan.monthly ? 'Monthly' : 'Yearly'})`}</p>
                            <span onClick={() => moveActive(2)}>Change</span>
                        </div>
                        <div className="bold">{`$${storeMultiForm.plan.monthly ? `${sumPlanCost()}/${storeMultiForm.plan.monthly ? 'mo' : 'yr'}` : `${sumPlanCost()}/yr`}`}</div>
                    </div>

                    <div className="border"></div>

                    {storeMultiForm.addOnes && storeMultiForm.addOnes.map((addOne, idx) => {
                        return (
                            <div key={`${addOne}-${idx}`} className="add-one-box">
                                <p>{addOne.split('-').join(' ')}</p>
                                <p className="bold">
                                    {`+$${addOne === "online-service" ? (storeMultiForm.plan.monthly ? '1' : '10') : (storeMultiForm.plan.monthly ? '2' : '20')}/${storeMultiForm.plan.monthly ? 'mo' : 'yr'}`}
                                </p>
                            </div>
                        )
                    })}

                </div>

                <div className="total padding-total flex space-bet">
                    <p>Total ({`per ${storeMultiForm.plan.monthly ? 'month' : 'year'}`})</p>
                    <p className="total-big">+${`${sumFormCost()}/${storeMultiForm.plan.monthly ? 'mo' : 'yr'}`}</p>

                </div>

            </div>
            <BtnBox moveActive={moveActive} multiFormState={multiFormState} confirmPage={true} />

        </section>
    )
}