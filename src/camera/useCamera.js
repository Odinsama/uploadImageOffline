import {useRef, useEffect} from "react";
export const useCamera = () => {
    const videoRef = useRef(null)
    useEffect(() => {
        console.log('wat')
            const video = videoRef.current
                console.log(navigator.mediaDevices)
            if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
                // Not adding `{ audio: true }` since we only want video now
                navigator.mediaDevices.getUserMedia({video: true}).then(function (stream) {
                    //video.src = window.URL.createObjectURL(stream);
                    video.srcObject = stream
                    video.play()
                    console.log('works')
                }).catch(err => console.log(err))
            }
        }
        , [videoRef])
    return videoRef
}