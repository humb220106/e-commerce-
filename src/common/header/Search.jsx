import logo1 from "../assets/images/logo1.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser, faShoppingBag } from '@fortawesome/free-solid-svg-icons'; 
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Search = ({cartItem}) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Add scroll event listener
    window.addEventListener('scroll', function () {
      const search = document.querySelector('.search');
      search.classList.toggle('active', window.scrollY > 100);
    });
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return (
    <>
      <section className='search'>
        <div className={`container ${isMobile ? 'mobile-search' : 'c_flex'}`}>
          <div className='logo-width'>
             <img src={logo1} alt='Logo' style={{ width: isMobile ? "60px" : "80px", height: "auto" }} />
          </div>

          <div className='search-box f_flex'>
            <FontAwesomeIcon icon={faSearch} />
            <input type='text' placeholder={isMobile ? 'Search...' : 'Search and hit enter...'} />
            {!isMobile && <span>All Category</span>}
          </div>

          <div className='icon f_flex widith'>
            <FontAwesomeIcon className='icon-circle' icon={faUser} />
            <div className='cart'>
              <Link to='/cart'> 
                <FontAwesomeIcon className='icon-circle' icon={faShoppingBag} />
                <span>{cartItem.length === 0 ? "" : cartItem.length}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Search;