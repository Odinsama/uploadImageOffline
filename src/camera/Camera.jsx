import React from "react"
import {useCamera} from "./useCamera";

export const Camera = () => {
    const ref = useCamera()
    return <video ref={ref} width={640} height={480} autoPlay/>
}