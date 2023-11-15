import React from 'react'
import "./ButtonChoosedTypeSytle.css"
import { TypesDeleteText } from '../../TextField/TestComponents'
function ButtonChoosedType(props) {
  return (
    <button className='btn-choosed-types'>
      <TypesDeleteText>{props.name}</TypesDeleteText>
      {props?.isCanDel && 
        <button className='btn-delete' ><i class="fa-solid fa-xmark"></i></button>
      }
    </button>
  )
}
ButtonChoosedType.defaultProps={
  name: "Thể loại 1",
  isCanDel: false,
}
export default ButtonChoosedType
