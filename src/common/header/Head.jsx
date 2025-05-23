import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

const Head = () => {
  return (
    <>
      <section className="head">
        <div className="container d_flex">
          <div className="left-row">
            <FontAwesomeIcon icon={faPhone} />  
            <label>+234 9065162535</label>
            <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: '8px' }} />
            <label>ogunmuyiwai64@gmail.com</label> 
          </div>
          <div className="right-row RText">
            <label>Theme FAQ's</label>
            <label>Need Helps?</label>
            <span>&#11088;</span>
            <label htmlFor=''>EN</label>
            <span>&#11088;</span>
            <label htmlFor=''>USD</label>


          </div>
        </div>
      </section>
    </>
  );
};

export default Head;