import {useEffect, useState} from "react";
import {AiOutlineArrowLeft, AiOutlineArrowRight} from "react-icons/ai"
import { sliderData } from "./Slider-data";
import "./Slider.scss"
const Slider = () => {
const [currentSlider, setCurrentSlider] = useState(0);
const slideLength= sliderData.length
console.log(slideLength);
const autoScroll=true
let slideInterval
let intervalTime=5000
const nextSlide=()=>{
    setCurrentSlider(currentSlider===slideLength-1?0: currentSlider+1)
}
const prevSlide=()=>{
    setCurrentSlider(currentSlider===0?slideLength-1:currentSlider-1)

}
useEffect(()=>{
    setCurrentSlider(0)
},[])

useEffect(() => {
if(autoScroll){
  const  auto=() =>{
        slideInterval=setInterval(nextSlide,intervalTime)   
    }
    auto()
}
return ()=>clearInterval(slideInterval)
}, [currentSlider,  slideInterval,autoScroll,auto])

  return (
    <div className="slider">
      <AiOutlineArrowLeft className="arrow prev" onClick={prevSlide}/>
      <AiOutlineArrowRight className="arrow next" onClick={nextSlide}/>
      {sliderData.map((slide,index)=>{
        const {image,heading,desc}=slide
        return(
            <div key={index} className={index===currentSlider ?"slide current":"slide"}>
                {index===currentSlider&&(
                    <>
                    <img src={image} alt="slider"/>
                    <div className="content">
                        <h2>{heading}</h2>
                        <p>{desc}</p>
                        <hr/>
                        <a href="#product" className="--btn --btn-primary">
                            Show Now
                        </a>
                    </div>
                    </>
                )}
            </div>
        )
      })}
    </div>
  );
};

export default Slider;
