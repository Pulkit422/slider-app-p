import React,{useState} from 'react'
import { Sliderdata } from './sliderdata';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

const Imageslider = ({slides}) => {
const [current,setCurrent]=useState(0);
const length=slides.length; //total number of slides

const nextSlide=()=>{
    setCurrent(current === length-1 ? 0 :current+1);
};
const prevSlide=()=>{
    setCurrent(current === 0 ? length-1 :current-1);
};
// console.log(current);
if(!Array.isArray(slides)||slides.length<=0){
    return null;
}
  return (
    <>
    <section className='slider'>
        <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide}/>
        <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide}/>
        {Sliderdata.map((slide, index) => (
        <div className={index === current ? 'slide active' : 'slide'} key={index}>
            {index === current && (
        <>
            <img src={slide.image} alt='travel image' className='image' />
            <h2 className="title">{slide.title}</h2>
        </>
        )}
        </div>
    ))}     
    </section>
    </>
  )
}

export default Imageslider