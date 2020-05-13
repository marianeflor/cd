import React from 'react'

export default props => 
    <img 
        src={require(`../assets/imgs/${props.name}.jpg`)}
        alt={props.name}
        className='image'
    />