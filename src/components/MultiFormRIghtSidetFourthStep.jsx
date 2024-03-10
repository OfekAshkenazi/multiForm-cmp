import { useSelector } from "react-redux"

export default function MultiFormRIghtSidetFourthStep() {
    const storeMultiForm = useSelector((storeState => storeState.multiFormModule.multiForm))
    console.log(storeMultiForm)

    return (
        <section className="mtc-right-fourth-step">
            <div className="mtc-right-fourth-step">
                <h2>Finishing up</h2>
                <p>Double-check everything looks OK before confirming.</p>



            </div>

        </section>
    )
}