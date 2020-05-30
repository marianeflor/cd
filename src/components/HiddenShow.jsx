import React from 'react'

export default props =>
    <button className="box button" type="button" onClick={() => props.buttonClick(props.hidden, props.hiddenShow)}>
        {`${props.hiddenShow} Gabarito`}
    </button>



