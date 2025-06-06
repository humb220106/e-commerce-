import Dcard from "./Dcard"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from "@fortawesome/free-solid-svg-icons"

const Discount = () => {
  return (
    <>
      <section className='Discount background NewArrivals'>
        <div className='container'>
          <div className='heading d_flex'>
            <div className='heading-left row  f_flex'>
              <img src='https://img.icons8.com/windows/32/fa314a/gift.png'  alt="discount image"/>
              <h2>Big Discounts</h2>
            </div>
            <div className='heading-right row '>
              <span>View all</span>
            <FontAwesomeIcon  icon={faCaretRight}/>
            </div>
          </div>
          <Dcard />
        </div>
      </section>
    </>
  )
}

export default Discount
