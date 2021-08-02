import React from 'react'
import PropTypes from 'prop-types'
const Route=({path,component:Component},{location})=>{
    const pathname=location.pathname;
    if(pathname.match(path)){
       //return (<Component/>)
       return React.createElement(Component)
     
    }else{
        return null
    }
   
}

Route.contextTypes={
    location:PropTypes.object
}


export default Route