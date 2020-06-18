import React, { useState, useRef } from "react"
import { exportComponentAsPNG } from "react-component-export-image"

import Grid from "./Grid"
import HiddenShow from "./HiddenShow"

function Game() {
  const listImg = []
  const listColors = [
    "beige", "beige", "beige", "beige",
    "black",
    "blue", "blue", "blue", "blue", "blue", "blue", "blue",
    "red", "red", "red", "red", "red", "red", "red"
  ]

  const randomInt = (min, max) => {
    return min + Math.floor((max - min) * Math.random())
  }

  while (listImg.length < 20) {
    const numRandom = randomInt(1, 271)
    if (!listImg.includes(numRandom)) listImg.push(numRandom)
  }

  const [initial] = useState(listImg)
  const [images, setImages] = useState(initial)

  let color
  if (Math.random() > 0.5) {
    color = "blue"
  } else {
    color = "red"
  }

  const [timeColor] = useState(color)
  listColors.push(timeColor)

  const arrayShuffle = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      const temp = arr[i]
      arr[i] = arr[j]
      arr[j] = temp
    }
    return arr
  }

  const [template] = useState(arrayShuffle(listColors))

  const toggleClick = (e) => {
    e.preventDefault()

    const position = Number(e.target.attributes.property.nodeValue)
    const alt = Number(e.target.attributes.alt.nodeValue)

    setImages(
      images.map((img, i) => {
        if (img === alt && template[position] !== img) {
          return template[position]
        } else if (i === position && initial[position] !== img) {
          return initial[position]
        } else {
          return img
        }
      })
    )
  }

  const [hidden, setHidden] = useState("")
  const [hiddenShow, setHiddenShow] = useState("Ocultar")
  const buttonClick = (hidden, hiddenShow) => {
    hidden === "" ? setHidden("hidden") : setHidden("")
    hiddenShow === "Mostrar"
      ? setHiddenShow("Ocultar")
      : setHiddenShow("Mostrar")
  }

  //ExportImage

  let width = '46.7rem'
  if (hidden) width = '30.3rem'

  const ComponentToPrint = React.forwardRef((props, ref) => (
    <div ref={ref} style={{ backgroundColor: 'whitesmoke', width: width, height: '24.5rem' }}>      
      <main>
        <Grid images={images} toggleClick={toggleClick} />
        {
          hidden ?
            <></>
            : <Grid smaller='smaller' hidden={hidden} images={template} timeColor={timeColor} />
        }
      </main>
    </div>
  ))

  const componentRef = useRef()
  return (
    <React.Fragment>
      <ComponentToPrint ref={componentRef} />
      <button className="box button" onClick={() => exportComponentAsPNG(componentRef)}>
        Screenshot
      </button>
      <HiddenShow hidden={hidden} hiddenShow={hiddenShow} buttonClick={buttonClick} />
    </React.Fragment>
  )
}

export default Game
