import { useEffect, useState } from "react";
import sideBar from "../assets/images/bg-sidebar-desktop.svg";
import sideBarSmall from "../assets/images/bg-sidebar-mobile.svg";

export default function MultiFormLeftSide({ moveActive, multiFormState }) {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)

    useEffect(() => {
        window.addEventListener('resize', whenResize);

        return () => {
            window.removeEventListener('resize', whenResize)
        }
    }, [screenWidth])


    function whenResize() {
        setScreenWidth(prevScreenWidth => window.innerWidth)
    }

    function backGroundImg() {
        if (screenWidth >= 900) {
            let backgroundImageBig = {
                backgroundImage: `url(${sideBar})`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
            }
            return backgroundImageBig
        } if (screenWidth <= 899) {
            let backgroundImageSmall = {
                backgroundImage: `url(${sideBarSmall})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
            }
            return backgroundImageSmall
        }

    }

    let backgroundImage = backGroundImg()

    return (

        <div className="mtc-container" style={backgroundImage}>

            <div className={`multi-form-state-left ${multiFormState === 1 ? 'active' : ''} flex align-center`} onClick={(ev) => moveActive(1)}>

                <div className="state-num flex align-center justify-center"> 1 </div>

                {screenWidth >= 900 && <div className="">
                    <h5>STEP 1</h5>
                    <p>YOUR INFO</p>
                </div>}

            </div>

            <div className={`multi-form-state-left ${multiFormState === 2 ? 'active' : ''} flex align-center`} onClick={(ev) => moveActive(2)}>

                <div className="state-num flex align-center justify-center"> 2 </div>

                {screenWidth >= 900 && <div className="">
                    <h5>STEP 2</h5>
                    <p>SELECT PLAN</p>
                </div>}

            </div>

            <div className={`multi-form-state-left ${multiFormState === 3 ? 'active' : ''} flex align-center`} onClick={(ev) => moveActive(3)}>

                <div className="state-num flex align-center justify-center"> 3 </div>

                {screenWidth >= 900 && <div className="">
                    <h5>STEP 3</h5>
                    <p>ADD-ONES</p>
                </div>}

            </div>
            <div className={`multi-form-state-left ${multiFormState === 4 || multiFormState === 5 ? 'active' : ''} flex align-center`} onClick={(ev) => moveActive(4)}>

                <div className="state-num flex align-center justify-center"> 4 </div>

                {screenWidth >= 900 && <div className="">
                    <h5>STEP 4</h5>
                    <p>SUMMARY</p>
                </div>}

            </div>

        </div>

    )
}