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
                backgroundImage: "repeating-linear-gradient(229deg, hsla(37.36,65.43%,15.88%,0.23857169800546818) 18%, hsla(347.6,80.13%,70.39%,0.9724640893461096) 56%), repeating-conic-gradient(from 161deg at 89% 44%, hsla(243.75,6.84%,54.12%,0.19075788068760757) 49%, hsla(13.33,79.41%,13.33%,0.31161419986006744) 78%), repeating-radial-gradient(ellipse at 0% 34%, hsla(348.08,80.41%,61.96%,0.2843185475864056) 55%, hsla(166.67,80%,35.29%,0.8594049815962503) 86%), conic-gradient(from 251deg at 35% 75%, hsla(136.67,69.23%,84.71%,0.2573382202450618) 17%, hsla(140.87,64.49%,41.96%,0.7763262850624522) 80%), repeating-conic-gradient(from 332deg at 38% 49%, #a12cda 79%, #f4ceec 95%)",
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                borderRadius: "8px"
        }
        return backgroundImageBig
    } if (screenWidth <= 899) {
        let backgroundImageSmall = {
            backgroundImage: "repeating-linear-gradient(229deg, hsla(37.36,65.43%,15.88%,0.23857169800546818) 18%, hsla(347.6,80.13%,70.39%,0.9724640893461096) 56%), repeating-conic-gradient(from 161deg at 89% 44%, hsla(243.75,6.84%,54.12%,0.19075788068760757) 49%, hsla(13.33,79.41%,13.33%,0.31161419986006744) 78%), repeating-radial-gradient(ellipse at 0% 34%, hsla(348.08,80.41%,61.96%,0.2843185475864056) 55%, hsla(166.67,80%,35.29%,0.8594049815962503) 86%), conic-gradient(from 251deg at 35% 75%, hsla(136.67,69.23%,84.71%,0.2573382202450618) 17%, hsla(140.87,64.49%,41.96%,0.7763262850624522) 80%), repeating-conic-gradient(from 332deg at 38% 49%, #a12cda 79%, #f4ceec 95%)",
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            borderRadius: "8px"
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