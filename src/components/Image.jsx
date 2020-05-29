import React from 'react'

export default props => 
<picture>
    <img 
        src={require(`../assets/imgs/${props.name}.jpg`)}
        alt={props.name}
        property={props.position}
        className='image'
        onClick={props.toggleClick}
    />
</picture>
