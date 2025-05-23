import React from "react"
import Catg from "./Catg"
import ShopCart from "./ShopCart"
import "./style.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";


const Shop = ({ addToCart, shopItems }) => {
  return (
    <>
      <section className='shop backg round'>
        <div className='container d_flex'>
          <Catg />
          <div className='contentWidth'>
            <div className='heading d_flex'>
              <div className='heading-left row  f_flex'>
                <h2>Mobile Phones</h2>
              </div>
              <div className='heading-right row '>
                <span>View all</span>
               <FontAwesomeIcon  icon={faCaretRight}/>
              </div>
            </div>
            <div className='product-content  grid1'>
              <ShopCart addToCart={addToCart} shopItems={shopItems} />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Shop
