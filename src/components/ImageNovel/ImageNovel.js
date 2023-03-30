import React from 'react'
import { Image } from './ImageStyle'

function ImageNovel(props) {
  return (
    <div>
        <Image src= {props.src}  style={{ width: props.width , height: props.height }}/>
    </div>
  )
}
ImageNovel.defaultProps = {
    src: "image/demoImg.webp",
    width: "36vh",
    height: "48vh",
  };
export default ImageNovel
