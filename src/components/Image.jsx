import React from 'react'

export default props => 
    <div className="image-container">
        <img 
            src={require(`../assets/imgs/${props.name}.png`)}
            alt={props.name}
            className='image'
            />
    </div>