import React, { useState } from "react"

import Image from "./Image"
import Column from "./Column"
import Row from "./Row"
import HiddenShow from "./HiddenShow"

function Game() {
  const listImg = []
  const listColors = [
    "beige","beige","beige","beige",
    "black",
    "blue","blue","blue","blue","blue","blue","blue",
    "red","red","red","red","red","red","red"
  ]

  const randomInt = (min, max) => {
    return min + Math.floor((max - min) * Math.random())
  }

  while (listImg.length < 20) {
    const numRandom = randomInt(1, 271)
    if (!listImg.includes(numRandom)) listImg.push(numRandom)
  }

  const [initial, setInitial] = useState(listImg)
  const [images, setImages] = useState(initial)

  let color
  if (Math.random() > 0.5) {
    color = "blue"
  } else {
    color = "red"
  }

  const [timeColor, setTimeColor] = useState(color)
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

  const [template, setTemplate] = useState(arrayShuffle(listColors))

  const toggleClick = (e) => {
    e.preventDefault()

    const position = e.target.attributes.property.nodeValue
    const alt = e.target.attributes.alt.nodeValue

    setImages(
      images.map((img) => {
        if (img == alt) {
          if (template[position] != img) {
            return template[position]
          } else {
            return initial[position]
          }
        } else {
          return img
        }
      })
    )
  }

  const [hidden, setHidden] = useState("")
  const [hiddenShow, setHiddenShow] = useState("Ocultar")
  const buttonClick = (hidden, hiddenShow) => {
    hidden == "" ? setHidden("hidden") : setHidden("")
    hiddenShow == "Mostrar"
      ? setHiddenShow("Ocultar")
      : setHiddenShow("Mostrar")
  }

  return (
    <>
        <main>
        <div className="grid">
            <Column />
            <Row />
            <section className="img-grid">
            {images.map((img, i) => (
                <Image name={img} key={i} position={i} toggleClick={toggleClick} />
            ))}
            </section>
        </div>

        <div className={`grid smaller ${hidden}`}>
            <Column />
            <Row />
            <section className="img-grid">
            {template.map((img, i) => (
                <Image name={img} key={i} />
            ))}
            </section>
            <h1 className="box" style={{ backgroundColor: `${timeColor}` }}>
            Time Inicial
            </h1>
        </div>
        </main>
        <HiddenShow hidden={hidden} hiddenShow={hiddenShow} buttonClick={buttonClick}/>
    </>
  )
}

export default Game
