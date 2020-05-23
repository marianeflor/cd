import React from 'react'

export default props => 
<picture>
    <img 
        src={require(`../assets/imgs/${props.name}.png`)}
        alt={props.name}
        className='image'
    />
</picture>
