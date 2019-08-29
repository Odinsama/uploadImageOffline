import {useRef, useEffect} from "react";
export const useCamera = () => {
    const videoRef = useRef({})
    useEffect(() => {
            const video = videoRef.current
            if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
                // Not adding `{ audio: true }` since we only want video now
                navigator.mediaDevices.getUserMedia({video: true}).then(function (stream) {
                    //video.src = window.URL.createObjectURL(stream);
                    video.srcObject = stream
                    video.play()
                    alert(video.srcObject)
                })
            }
        }
        , [videoRef])
    return videoRef
}