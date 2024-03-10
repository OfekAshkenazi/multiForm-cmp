import { useSelector } from "react-redux"
import BtnBox from './BtnBox';

export default function MultiFormRIghtSidetFourthStep({ moveActive, multiFormState }) {
    const storeMultiForm = useSelector((storeState => storeState.multiFormModule.multiForm))

    function sumPlanCost() {
        let sumPlanCost

        if (storeMultiForm.plan.catagory === "Arcade") {
            return sumPlanCost = 9
        }
        if (storeMultiForm.plan.catagory === "Advanced") {
            return sumPlanCost = 12
        }
        if (storeMultiForm.plan.catagory === "Pro") {
            return sumPlanCost = 15
        } else {
            return sumPlanCost = 0
        }
    }

    console.log(sumFormCost())

    function sumFormCost() {
        const sumAddOnesCost = storeMultiForm.addOnes.reduce((acc, addone) => {
            return addone === "online-service" ? acc + 1 : acc + 2
        }, 0)

        let sumPlanCosts = sumPlanCost()

        return console.log(sumPlanCosts += sumAddOnesCost)

    }

    return (
        <section className="mtc-right-fourth-step">
            <div className="mtc-right-fourth-content">
                <h2>Finishing up</h2>
                <p>Double-check everything looks OK before confirming.</p>

                <div className="finishing-up-container">
                    <div className="flex">
                        <div className="">
                            <p>{`${storeMultiForm.plan.catagory} (${storeMultiForm.plan.monthly ? 'Monthly' : 'Yearly'})`}</p>
                            <span>Change</span>
                        </div>
                        <div className="">{`$${storeMultiForm.plan.monthly ? sumPlanCost() : `${sumPlanCost()}0`}`}</div>
                    </div>


                    {storeMultiForm.addOnes && storeMultiForm.addOnes.map((addOne, idx) => {
                        return (
                            <div key={`${addOne}-${idx}`} className="">
                                <p>{addOne}</p>
                                <p>
                                    {`+$${addOne === "online-service" ? (storeMultiForm.plan.monthly ? '1' : '10') : (storeMultiForm.plan.monthly ? '2' : '20')}/${storeMultiForm.plan.monthly ? 'mo' : 'yr'}`}
                                </p>
                            </div>
                        )
                    })}

                </div>

                <div className="">
                    <p>Total ({`per ${storeMultiForm.plan.monthly ? 'month' : 'year'}`})</p>
                    <p>+${`${sumFormCost()}/${storeMultiForm.plan.monthly ? 'mo' : 'yr'}`}</p>

                </div>


                <BtnBox moveActive={moveActive} multiFormState={multiFormState} />



            </div>

        </section>
    )
}