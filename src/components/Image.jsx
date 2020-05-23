import React from 'react'

export default props => 
    <img 
        src={require(`../assets/imgs/${props.name}.png`)}
        alt={props.name}
        className='image'
    />