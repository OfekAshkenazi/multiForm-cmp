export default function BtnBox({ moveActive, multiFormState, confirmPage }) {

    function handleNextPage() {
        moveActive()
    }

    function handleBackPage() {
        moveActive(multiFormState - 1)
    }


    return (
        <div className="btn-box flex space-bet">
            <button onClick={() => handleBackPage()}>Go Back</button>
            <button className="move-state-btn" onClick={() => handleNextPage()}>{confirmPage ? 'Confirm' : 'Next Step'}</button>
        </div>
    )
}