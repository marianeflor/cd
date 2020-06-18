import React from 'react'
import Column from './Column'
import Row from './Row'
import Image from './Image'

const Grid = (props) => {
    return (
        <div className={`grid ${props.smaller} ${props.hidden}`}>
            <Column />
            <Row />
            <section className="img-grid">
                {props.images.map((img, i) => (
                    <Image name={img} key={i} position={i} toggleClick={props.toggleClick} />
                ))}
            </section>
            {props.timeColor
                ? <h1 className="box" style={{ backgroundColor: `${props.timeColor}` }}>
                    Time Inicial
                    </h1>
                : <></>
            }
        </div>
    )
}

export default Grid
