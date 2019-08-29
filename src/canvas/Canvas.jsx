import React,{useRef} from "react";

export const Canvas = (props) => {
    const camera = props.camera
    const ref = useRef({getContext(){console.warn('no ref :(')}})
    return(
        <div>
            <canvas ref={ref} width="640" height="480"/>
            <button onClick={() => {
                if(camera.current){
                    const context = ref.current.getContext('2d')
                    console.log(camera);
                    context.drawImage(camera.current, 0, 0, 640, 480)
                }
            }}>Click me!</button>
        </div>)
}