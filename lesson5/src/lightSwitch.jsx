import { useState } from "react";

// tạo ứng dụng đèn giao thông, bấm nút next là chuyển đèn
const Light = (prop) => {
    return (
        <div className="trafficLight" style={{ backgroundColor: prop.x }}></div>
    )
}

export const LightSwitch = () => {
    const lightColor = ["red", "yellow", "green", "white"]
    const [lightRed, setLightRed] = useState(lightColor[0]);
    const [lightYellow, setLightYellow] = useState(lightColor[3]);
    const [lightGreen, setLightGreen] = useState(lightColor[3]);
    const lightSwitch = () => {
        if (lightGreen === lightColor[2]) { //green
            setLightRed(lightColor[0]); // red
            setLightGreen(lightColor[3]);   // white
        } else if (lightRed === lightColor[0]) {    // red
            setLightYellow(lightColor[1]);  // yellow
            setLightRed(lightColor[3]); // white
        } else if (lightYellow === lightColor[1]) { // yellow
            setLightGreen(lightColor[2]);   // green
            setLightYellow(lightColor[3]);  // white
        }
    }
    return (
        <>
            <button onClick={lightSwitch}>next</button>
            <div style={{display: "flex"}}>
                <Light x={lightRed}/>
                <Light x={lightYellow} />
                <Light x={lightGreen} />
            </div>

        </>
    )
}