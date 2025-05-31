import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import "./style.css"

const Cart = ({ cartItem, addToCart, decreaseQty }) => {
  const totalPrice = cartItem.reduce((price, item) => price + item.qty * item.price, 0);

  return (
    <>
      <section className='cart-items'>
        <div className='container d_flex'>
          <div className='cart-details'>
            {cartItem.length === 0 && (
              <h1 className='no-items product'>No Items are added in Cart</h1>
            )}

            {cartItem.map((item) => {
              const productQty = item.price * item.qty;
              return (
                <div className='cart-list product d_flex' key={item.id}>
                  <div className='img'>
                    <img src={item.cover} alt='' />
                  </div>
                  <div className='cart-details'>
                    <h3>{item.name}</h3>
                    <h4>
                      {item.price}.00 * {item.qty}
                      <span>${productQty}.00</span>
                    </h4>
                  </div>

                  <div className='cart-items-function'>
                    <div className='removeCart'>
                      <button>
                        <FontAwesomeIcon icon={faXmark} />
                      </button>
                    </div>

                    <div className='cartControl d_flex'>
                      <button className='inCart' onClick={() => addToCart(item)}>
                        <FontAwesomeIcon icon={faPlus} />
                      </button>

                      <button
                        className='desCart'
                        onClick={() => decreaseQty(item)}
                      >
                        <FontAwesomeIcon icon={faMinus} />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          <div
  className="cart-total product"
  style={{
    width: "100%",
    marginTop: "30px",
    marginLeft: "0",
    height: "130px",
    background: "#fff",
    borderRadius: "10px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
    padding: "20px"
  }}
>
  <h2
    style={{
      fontSize: "18px",
      marginBottom: "20px",
      borderBottom: "1px solid rgb(3 0 71 / 9%)",
      paddingBottom: "10px",
      color: "#e94560",
      fontWeight: "bold"
    }}
  >
    Cart Summary
  </h2>
  <div
    style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }}
  >
    <h4 style={{ fontSize: "15px", fontWeight: 400, margin: 0 }}>Total Price :</h4>
    <h3 style={{ fontSize: "20px", fontWeight: 500, color: "#e94560", margin: 0 }}>
      ${totalPrice}.00
    </h3>
  </div>
</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;