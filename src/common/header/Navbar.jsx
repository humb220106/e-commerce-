import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faChevronDown, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


const Navbar = () => {

   const [MobileMenu, setMobileMenu] = useState(false)
  return (
    <>
      <header className='header'>
        <div className='container d_flex'>
          <div className='categories d_flex'>
            <span className='fa-solid fa-border-all'></span>
            <h4>
              Categories <FontAwesomeIcon icon={faChevronDown} />
            </h4>
          </div>

          <div className='nav-link'>
            <ul className={MobileMenu ? 'nav-links-MobileMenu' : 'link f_flex capitalize'} onClick={()=> setMobileMenu(false)}>
              <li>
                <Link to='/'>Home</Link> {/* Correct usage of Link */}
              </li>
              <li>
                <Link to='/pages'>Pages</Link>
              </li>
              <li>
                <Link to='/user'>User Account</Link>
              </li>
              <li>
                <Link to='/vendor'>Vendor Account</Link>
              </li>
              <li>
                <Link to='/track'>Track My Order</Link>
              </li>
              <li>
                <Link to='/contact'>Contact</Link>
              </li>
            </ul>

            <button className='toggle' onClick={()=> setMobileMenu(!MobileMenu)}>
              {MobileMenu ? 
              <FontAwesomeIcon className='close home-bth' icon={faTimes}/> :
                 <FontAwesomeIcon className='open' icon={faBars}/>}

            </button>
          </div>
        </div>
      </header>
    </>
  );
};
export default Navbar;