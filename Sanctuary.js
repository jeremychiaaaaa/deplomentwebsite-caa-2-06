import React,{useEffect,useState} from 'react'
import styled, { keyframes } from 'styled-components'
import { createGlobalStyle } from 'styled-components'
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, Move, MoveIn, MoveOut, Sticky, StickyIn, ZoomIn } from "react-scroll-motion";
import WebFont from 'webfontloader';
const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
const FadeUp = batch(Fade(), MoveOut(0, -200), Sticky());
const cloud1 = require('../cloud1.png')
const cloud2 = require('../cloud2.png')
const cloud3 = require('../cloud3.png')
const cloud4 = require('../cloud4.png')
const cloud5 = require('../cloud5.png')

function Sanctuary() {
const[styles,setStyles] = useState({marginBottom:0})

let style={
  position: 'relative',
  fontSize:'2.5rem',
  fontWeight:700,
  color:'#fff',
}
useEffect(() => {
  window.addEventListener('scroll', function(){
    let pos = window.scrollY
    let poss = pos * 2
    console.log(poss)
setStyles({marginBottom:poss})
  })
  WebFont.load({
    google: {
      families: ['Droid Sans', 'Chilanka','Roboto Condensed']
    }
  });
  
},[])
  return (
 <>
    <div className='sanctuary'>

      <h2
      style={{...style, marginBottom: `${styles.marginBottom}px`}}
     >SANCTUARY</h2>

      <div className='clouds'>
        <Image  src={cloud1} ></Image>
        <Image1 src={cloud2} ></Image1>
        <Image2 src={cloud3} ></Image2>
        <Image3 src={cloud4} ></Image3>
        <Image4 src={cloud5} ></Image4>
        <Image5 src={cloud1}></Image5>
        <Image6 src={cloud2}></Image6>
        <Image7 src={cloud3} ></Image7>
        <Image8 src={cloud4} ></Image8>
        <Image9 src={cloud5}></Image9>

      </div>
    </div>
    <div className='values'>
      <h2>VALUES</h2>
      <p style={{fontFamily:'Roboto Condensed'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /> Consectetur tempora ab laudantium voluptatibus aut eos placeat laborum, quibusdam exercitationem labore. 
      Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /> Consectetur tempora ab laudantium voluptatibus aut eos placeat laborum, quibusdam exercitationem labore. 
      Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /> Consectetur tempora ab laudantium voluptatibus aut eos placeat laborum, quibusdam exercitationem labore. </p>
    </div>
   </>
  )
}

const cloudFade = keyframes`
  0%{
    opacity:0;
    transform:scale(1);
  }
  25%,75%{
    opacity:1;
  }
  100%{
    opacity:0;
   transform:scale(3);
  }
`
const Image = styled.img`
animation: ${cloudFade} 3s linear infinite;
`
const Image1 = styled.img`
animation: ${cloudFade} 6s linear infinite;
`
const Image2 = styled.img`
animation: ${cloudFade} 9s linear infinite;
`
const Image3 = styled.img`
animation: ${cloudFade} 12s linear infinite;
`
const Image4 = styled.img`
animation: ${cloudFade} 15s linear infinite;
`
const Image5 = styled.img`
animation: ${cloudFade} 30s linear infinite;
`
const Image6 = styled.img`
animation: ${cloudFade} 27s linear infinite;
`
const Image7 = styled.img`
animation: ${cloudFade} 24s linear infinite;
`
const Image8 = styled.img`
animation: ${cloudFade} 21s linear infinite;
`
const Image9 = styled.img`
animation: ${cloudFade} 18s linear infinite;
`



const value = window.scrollY
const textFade = keyframes`
to{
  marginBottom: ${value}*2;
}
`



export default Sanctuary