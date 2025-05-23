import { useState } from "react"
import { faHeart, faPlus, faStar } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const ShopCart = ({ shopItems, addToCart }) => {
  const [count, setCount] = useState(0)
  const increment = () => {
    setCount(count + 1)
  }

  return ( 
    <>
      {shopItems.map((shopItems, index) => {
        return (
          <div className='box'>
            <div className='product mtop'>
              <div className='img'>
                <span className='discount'>{shopItems.discount}% Off</span>
                <img src={shopItems.cover} alt='' />
                <div className='product-like'>
                  <label>{count}</label> <br />
                  <FontAwesomeIcon  icon={faHeart}    onClick={increment}/>
                </div>
              </div>
              <div className='product-details'>
                <h3>{shopItems.name}</h3>
                <div className='rate'>
                  <FontAwesomeIcon  icon={faStar}/>
                 <FontAwesomeIcon  icon={faStar}/>
                  <FontAwesomeIcon  icon={faStar}/>
                  <FontAwesomeIcon  icon={faStar}/>
                <FontAwesomeIcon  icon={faStar}/>
                </div>
                <div className='price'>
                  <h4>${shopItems.price}.00 </h4>
                  {/* step : 3  
                     if hami le button ma click garryo bahne 
                    */}
                  <button onClick={() => addToCart(shopItems)}>
                     <FontAwesomeIcon  icon={faPlus}/> 
                  </button>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default ShopCart
