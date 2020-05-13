import React from 'react'
import Image from './components/Image'
import './App.css'
import Column from './components/Column'
import Row from './components/Row'

function App() {
  const listImg = []

  const randomInt = (min, max) => {
    return min + Math.floor((max - min) * Math.random());
  }

  while (listImg.length < 20){
    const numRandom = randomInt(1,30)
    if(!listImg.includes(numRandom)) listImg.push(numRandom)
  }

  return (
    <div className='grid'>
      <Column />
      <Row />
      
      <section className='img-grid'>
        {listImg.map((img, i) => (
          <Image name={img} key={i}/>
          ))
        }
      </section>

    </div>
  )
}

export default App
