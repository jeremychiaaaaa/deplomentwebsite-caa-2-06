import React, {useState, useEffect} from 'react'
import { motion } from 'framer-motion'
import Backdrop from './Backdrop'
import ReactCardFlip from 'react-card-flip'
import "swiper/css";
import WebFont from 'webfontloader';
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper";
function Team() {
  const[phone,setPhone] = useState(window.matchMedia("(max-width: 900px)").matches)
 useEffect(() => {
 window.matchMedia("(max-width: 900px)").addEventListener('change', e => setPhone(e.matches))
 WebFont.load({
  google: {
    families: ['Droid Sans', 'Chilanka','Roboto Condensed', 'Smooch Sans', 'Oswald','PT Sans Narrow','Bree Serif', "Exo", 'Patua One', 'Teko', 'Cuprum', 'Share', 'Jockey One','Dosis']
  }
});

}, [])
let subHeaderStyle = {
  fontFamily:'Bree Serif', fontSize:'2.5rem', fontWeight:700, color:'black',
}
let subHead = {
  fontWeight:300, fontSize:'1.6rem',fontFamily:'Bree Serif',position:'relative', marginTop:'10px',  letterSpacing:4.4, 
}
let style={
  fontWeight:200, fontSize:'1.3rem',fontFamily:'Dosis',marginTop:'10px'
}
  return(
  <section>
  <Swiper
    effect={"coverflow"}
    grabCursor={true}
    centeredSlides={true}
    slidesPerView={phone ? 1 : 3}
    coverflowEffect={{
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2,
      slideShadows: true,
    }}
   loop={true}
   pagination={phone ? true : false}
    modules={[EffectCoverflow, Pagination]}
    className="mySwiper"
  >
    <SwiperSlide>
      <div className={phone ? 'profileCard-Phone': 'profileCard' }>
      <img src='https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg' className='profilePicture' />
     <h1 style={subHeaderStyle}>Divine Prophet</h1>
     <h3 style={subHead}>FOUNDER</h3>
    
 
    <span style={style}>Anime connoisseur</span>
    <span style={style}>Sleepy by 8pm. *Yawns*</span>
         <span style={style}>All bout' dem personal development gAinZ</span>
      <div className='profileCard-icons'>
      
        <div className='teamcard-svg'>
       <a href='https://www.twitter.com/divineprophet25'><span className='team-icon-twitter '></span></a>   

        </div>
         <span style={{...style, marginTop:0}}> @divineprophet25</span>
      </div>
      </div>
    </SwiperSlide>
    <SwiperSlide>
    <div className={phone ? 'profileCard-Phone' : 'profileCard'}>
      <img src='https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg' className='profilePicture' />
      <h1 style={subHeaderStyle}>Holyxaffinity</h1>
     <h3 style={subHead}>FOUNDER</h3>
    
 
    <span style={style}>uni dropout to-be :)</span>
    <span style={style}>#zuckerberg  #billgates</span>
         <span style={style}>coping mechanism: caffeine</span>
      <div className='profileCard-icons'>
      
        <div className='teamcard-svg'>
       <a href='https://www.twitter.com/holyxaffinity'><span className='team-icon-twitter '></span></a>   

        </div>
         <span style={{...style, marginTop:0}}> @holyxaffinity</span>
      </div>
      </div>
 
    </SwiperSlide>
    <SwiperSlide>
    <div className={phone ? 'profileCard-Phone' : 'profileCard'}>
      <img src='https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg' className='profilePicture' />
      <h1 style={subHeaderStyle}>Auxuris</h1>
     <h3 style={subHead}>LEAD ARTIST</h3>
    
 
    <span style={style}>I draw the shit that you see.</span>
    <span style={style}>Plays too much genshin/LOL</span>
         <span style={style}>Secretly a vampire.</span>
      <div className='profileCard-icons'>
      
        <div className='teamcard-svg'>
       <a href='https://www.twitter.com/auxuris'><span className='team-icon-twitter '></span></a>   

        </div>
         <span style={{...style, marginTop:0}}> @auxuris </span>
      </div>
      </div>
    </SwiperSlide>
    <SwiperSlide>
    <div className={phone ? 'profileCard-Phone' : 'profileCard'}>
      <img src='https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg' className='profilePicture' />
      <h1 style={subHeaderStyle}>Jem</h1>
     <h3 style={subHead}>TECH LEAD</h3>
    
 
    <span style={style}>The work is the work.</span>
    <span style={style}>MAMBA MENTALITY</span>
         <span style={style}>#ripkobe</span>
      <div className='profileCard-icons'>
      
        <div className='teamcard-svg'>
       <a href='https://www.twitter.com/auxuris'><span className='team-icon-twitter '></span></a>   

        </div>
         <span style={{...style, marginTop:0}}> @jem </span>
      </div>
      </div>
    </SwiperSlide>
    <SwiperSlide>
    <div className={phone ? 'profileCard-Phone' : 'profileCard'}>
      <img src='https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg' className='profilePicture' />
      <h1 style={subHeaderStyle}>HEAD MOD</h1>
  
    
 
    <span style={style}>probably still sleeping somewhere</span>
  
      <div className='profileCard-icons'>
      
        <div className='teamcard-svg'>
       <a href='https://www.twitter.com/auxuris'><span className='team-icon-twitter '></span></a>   

        </div>
         <span style={{...style, marginTop:0}}> @headmod </span>
      </div>
      </div>
    </SwiperSlide>
    <SwiperSlide>
    <div className={phone ? 'profileCard-Phone' : 'profileCard'}>
      <img src='https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg' className='profilePicture' />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /> Consectetur tempora ab laudantium voluptatibus aut eos placeat laborum, quibusdam exercitationem labore. 
      Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /> Consectetur tempora ab laudantium voluptatibus aut eos placeat laborum, quibusdam exercitationem labore. 
      Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /> Consectetur tempora ab laudantium voluptatibus aut eos placeat laborum, quibusdam exercitationem labore. </p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /> Consectetur tempora ab laudantium voluptatibus aut eos placeat laborum, quibusdam exercitationem labore. 
      Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /> Consectetur tempora ab laudantium voluptatibus aut eos placeat laborum, quibusdam exercitationem labore. 
      Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /> Consectetur tempora ab laudantium voluptatibus aut eos placeat laborum, quibusdam exercitationem labore. </p>
  
      <div className='profileCard-icons'>
        <div className='teamcard-svg'>
          <span className='team-icon-instagram '></span>
        </div>
        <div className='teamcard-svg'>
          <span className='team-icon-twitter '></span>
        </div>
        <div className='teamcard-svg'>
          <span className='team-icon-linkedin '></span>
        </div>
      </div>
      </div>
    </SwiperSlide>

  </Swiper>


</section>

 )
}

export default Team