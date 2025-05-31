import Cart from "./Cart"
import "./style.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from "@fortawesome/free-solid-svg-icons"

const NewArrivals = () => {
  return (
    <>
      <section className='NewArrivals background'>
        <div className='container'>
          <div className='heading d_flex'>
            <div className='heading-left row  f_flex'>
              <img src='https://img.icons8.com/glyph-neue/64/26e07f/new.png' alt="arrivals image"/>
              <h2>New Arrivals </h2>
            </div>
            <div className='heading-right row '>
              <span>View all</span>
             <FontAwesomeIcon  icon={faCaretRight}/>
            </div>
          </div>

          <Cart />
        </div>
      </section>
    </>
  )
}

export default NewArrivals
