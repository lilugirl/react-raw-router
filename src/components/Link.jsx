import React from 'react'
import PropTypes from 'prop-types'
const Link=({to,children},{history})=>{
    return (<a href={to}  onClick={(e)=>{
      e.preventDefault();
      history.push(to)
    }}>{children}</a>)
}

Link.contextTypes={
    history:PropTypes.object
}
export default Link