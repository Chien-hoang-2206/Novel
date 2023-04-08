import React from 'react'
import "./ButtonTypesStyle.css"
import { Nomal, TypesDeleteText } from '../../TextField/TestComponents'
function ButtonTypes(props) {
  return (
    <div>
      <div className='btn-types'>
         <TypesDeleteText>{props.type}</TypesDeleteText>
    
      </div>
    </div>
  )
}
ButtonTypes.defaultProps={
    type: "Thể loại 1",
}
export default ButtonTypes
