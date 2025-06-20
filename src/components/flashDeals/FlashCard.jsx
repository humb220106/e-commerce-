import  { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHeart, faLongArrowAltLeft, faLongArrowAltRight, faPlus, faStar} from '@fortawesome/free-solid-svg-icons';
import Slider from "react-slick";   


const NextArrow =(props) =>{
   const {onClick} = props
   return(
      <div className='control-btn' onClick={onClick}>
         <button className='next'>
         <FontAwesomeIcon className='i' icon={faLongArrowAltRight} /> 
         </button>

      </div>
   )
}

const PrevArrow =(props) =>{
   const {onClick} = props
   return(
      <div className='control-btn' onClick={onClick}>
         <button className='prev'>
         <FontAwesomeIcon className='i' icon={faLongArrowAltLeft} /> 
         </button>

      </div>
   )
}

const FlashCard = ( {productItems, addToCart}) => {
   const [count, setCount] = useState(0)
   const increment = () =>{
     setCount(count + 1)
   }



   const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1, 
      nextArrow:<NextArrow/>,
      prevArrow:<PrevArrow/>,
     responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

  return (
    <>
      <Slider {...settings}>
    {
      productItems.map((productItems) =>{
   return(
   <div className="box">
      <div className="product mtop">
         <div className="img">
            <span className='discount'>{productItems.discount}% Off</span>
            <img src={productItems.cover} alt="" />
            <div className="product-like">
               <label>0</label> <br />
                <FontAwesomeIcon className='i' onClick={increment} icon={faHeart}/>

            </div>
         </div>
         <div className="product-details">
            <h3>{productItems.name}</h3>
            <div className="rate">
          <FontAwesomeIcon    icon={faStar }/>
            <FontAwesomeIcon  icon={faStar }/>
            <FontAwesomeIcon  icon={faStar }/>
            <FontAwesomeIcon  icon={faStar }/>
            <FontAwesomeIcon  icon={faStar }/>
            </div>
            <div className="price">
               <h4>{productItems.price}.00</h4> 
               <button onClick={() => addToCart(productItems)}>
               <FontAwesomeIcon  icon={faPlus}/>
               </button>
            </div>
         </div>
      </div>
     </div>
   );
     })}
     </Slider>
    </>
  )
}

export default FlashCard
