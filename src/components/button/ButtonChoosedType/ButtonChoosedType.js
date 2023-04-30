import React from 'react'
import "./ButtonChoosedTypeSytle.css"
import { TypesDeleteText } from '../../TextField/TestComponents'
function ButtonChoosedType(props) {
  return (
    <button className='btn-choosed-types'>
       <TypesDeleteText>{props.type}</TypesDeleteText>
      <button className='btn-delete' ><i class="fa-solid fa-xmark"></i></button>
    </button>
  )
}
ButtonChoosedType.defaultProps={
    type: "Thể loại 1",
}
export default ButtonChoosedType
