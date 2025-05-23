import logo from "../assets/images/logo.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser, faShoppingBag } from '@fortawesome/free-solid-svg-icons'; 
import { Link } from 'react-router-dom';

const Search = ({cartItem}) => {
  window.addEventListener('scroll', function () {
    const search = document.querySelector('.search');
    search.classList.toggle('active', window.scrollY > 100);
  });
  
  return (
    <>
      <section className='search'>
        <div className='container c_flex'>
          <div className='logo width'>
            <img src={logo} alt='' />
          </div>

          <div className='search-box f_flex'>
            <FontAwesomeIcon icon={faSearch} />
            <input type='text' placeholder='Search and hit enter...' />
            <span>All Category</span> 
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