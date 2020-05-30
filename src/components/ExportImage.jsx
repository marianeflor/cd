import { exportComponentAsPNG } from "react-component-export-image"
import React, { useRef } from "react"
import Game from "./Game"

const ComponentToPrint = React.forwardRef((props, ref) => ( 
    <div ref={ref}>
        <Game />
    </div>
))

const ExportImage = () => {
    const componentRef = useRef()

    return (
    <React.Fragment>
        <ComponentToPrint ref={componentRef} />
        <button className="box button screenshot" onClick={() => exportComponentAsPNG(componentRef)}>
            Screenshot
        </button>
    </React.Fragment>)
}

export default ExportImage

