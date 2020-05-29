import React, {useState} from 'react'
import Image from './components/Image'
import './App.css'
import Column from './components/Column'
import Row from './components/Row'

function App() {
  const listImg = []
  const listColors = ['beige','beige','beige','beige',
                      'black',
                      'blue','blue','blue','blue','blue','blue','blue',
                      'red','red','red','red','red','red','red']  

  const randomInt = (min, max) => {
    return min + Math.floor((max - min) * Math.random())
  }

  while (listImg.length < 20){
    const numRandom = randomInt(1,271)
    if(!listImg.includes(numRandom)) listImg.push(numRandom)
  }

  const [initial, setInitial] = useState(listImg)
  const [images, setImages] = useState(initial)
  
  let color
  if(Math.random() > 0.5) {
    color = 'blue'
  } else {
    color = 'red'
  }
  const [timeColor, setTimeColor] = useState(color)
  listColors.push(timeColor)

  const arrayShuffle = arr => {
    for (let i = arr.length -1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i +1))
      const temp = arr[i]
      arr[i] = arr[j]
      arr[j] = temp
    }
    return arr
  }

  const [template, setTemplate] = useState(arrayShuffle(listColors))
  
  const handleClick = e => {
    
    e.preventDefault()

    const position = e.target.attributes.property.nodeValue
    const alt = e.target.attributes.alt.nodeValue

    setImages(images.map((img) => img == alt ? template[position] : img))
  }

  const handleDoubleClick = e => {
    
    e.preventDefault()

    const position = e.target.attributes.property.nodeValue
    const alt = e.target.attributes.alt.nodeValue

    setImages(images.map((img, i) => i == position ? initial[position] : img))
  }

  return (
    <main>
      <div className='grid'>
        <Column />
        <Row />      
        <section className='img-grid'>
          {images.map((img, i) => (
            <Image name={img} key={i} position={i} handleClick={handleClick} handleDoubleClick={handleDoubleClick}/>
            ))
          }
        </section>
      </div>

      <div className='grid smaller'>
        <Column />
        <Row />
        <section className='img-grid'>
          {template.map((img, i) => (
            <Image name={img} key={i} />
            ))
          }
        </section>
        <h1 style={{backgroundColor: `${timeColor}`}}>Time Inicial</h1>
      </div>
    </main>
  )
}

export default App
