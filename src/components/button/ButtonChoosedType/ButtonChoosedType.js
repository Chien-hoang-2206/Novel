import React from 'react'
import "./ButtonChoosedTypeSytle.css"
import { TypesDeleteText } from '../../TextField/TestComponents'
function ButtonType(props) {
  return (
    <button style={{marginRight: 5}} className="rounded-2xl  text-gray-500 px-3 py-1 h-7 hover:bg-yellow-200 mb-2 border border-gray-500 ">
      <TypesDeleteText>{props?.children}</TypesDeleteText>
      {props?.isCanDel && 
        <button className='btn-delete' ><i className="fa-solid fa-xmark"></i></button>
      }
    </button>
  )
}
ButtonType.defaultProps={
  children: "Thể loại 1",
  isCanDel: false,
}
export default ButtonType
