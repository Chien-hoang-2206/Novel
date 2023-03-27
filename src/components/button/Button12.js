import React from 'react'
import { memo } from 'react'

function Button12 (props) {
  return (
    <div>
      <h2> {props.name} </h2>
    </div>
  )
};
export default memo(Button12);