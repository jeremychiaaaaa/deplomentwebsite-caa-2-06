import React, {useState,useEffect, useRef} from 'react'
import styled, { keyframes } from 'styled-components'

const image1 = require('../card2.jpg')
const image2 = require('../trial3dd.jpg')
function Art() {
  const Row1Ref = useRef(null)
  const Row2Ref = useRef(null)
  return (
   <Section>
     <Row direction='none' ref={Row1Ref}>
    
     <ImageItem img={image1} forwardRef={Row1Ref}   />
     <ImageItem img={image1}  forwardRef={Row1Ref} />
     <ImageItem  img={image1}  forwardRef={Row1Ref} />
     <ImageItem  img={image1}  forwardRef={Row1Ref} />
     <ImageItem img={image1}  forwardRef={Row1Ref} />

       </Row>
       <Row direction='reverse' ref={Row2Ref}>
    
    <ImageItem img={image1} forwardRef={Row2Ref}   />
    <ImageItem img={image1}  forwardRef={Row2Ref} />
    <ImageItem  img={image1}  forwardRef={Row2Ref} />
    <ImageItem  img={image1}  forwardRef={Row2Ref} />
    <ImageItem img={image1}  forwardRef={Row2Ref} />

      </Row>
   </Section>
  )
}
const ImageItem = ({img,forwardRef}) => {
let play = (e) => {
  forwardRef.current.style.animationPlayState = 'running'
}
let pause = (e) => {
  forwardRef.current.style.animationPlayState = 'paused'
}
  return(
      <ImgContainer onMouseOver={e => pause(e)} onMouseOut={e => play(e)}  >
  <img src={img} />
  
  </ImgContainer>
  )

}
const ImgContainer = styled.div`
width:15rem;
margin:0 1rem;
border-radius:20px;
cursor:pointer;
background-color: white;
img{
  width:100%;
  height:auto;
}
`
const move = keyframes`
0%{
  transform:translateX(-20%)
}
100%{
  transform:translateX(-130%)
}
`
const Section = styled.div`
width:100vw;

display: flex;
align-items: center;
justify-content: center;
position: relative;
flex-direction: column;
top:100px;
`
const Row = styled.div`

white-space: nowrap;
box-sizing: content-box;
margin:2rem 0;
display: flex;
animation : ${move} 12s linear infinite ${props => props.direction};


`
export default Art