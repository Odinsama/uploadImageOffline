import React from "react"
import {useCamera} from "./useCamera";
import {Canvas} from "../canvas/Canvas";

export const Camera = () => {
    const ref = useCamera()
    return (
        <div>
            <video ref={ref} width={640} height={480} autoPlay/>
            <Canvas camera={ref}/>
        </div>)
}