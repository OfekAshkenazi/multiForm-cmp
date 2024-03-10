import ThankYouImg from "../assets/images/icon-thank-you.svg"

export default function EndPage() {
    return (
        <section className="end-page">
            <div className="end-page-content">

                <div className="img-container">
                    <img src={ThankYouImg} alt="Thank you" />
                </div>

                <h1>Thank you!</h1>
                <p>
                    Thanks for confirming your subscription!
                    We hope you have fun using my platform.
                    If you ever need support,
                    please feel free to email me at ofeka18@gmail.com.
                </p>

            </div>
        </section>
    )
}