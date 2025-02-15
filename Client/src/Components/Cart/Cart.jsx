import { useSelector, useDispatch } from "react-redux";
import {useNavigate} from "react-router-dom"
import { BsDash, BsPlus } from "react-icons/bs";
import { BsReverseBackspaceReverse } from "react-icons/bs";
export const Cart = () => {
  const navigate=useNavigate()
  const { products, totalQuantities, totalPrice } = useSelector(
    (state) => state.CartReducer
  );
  const dispatch = useDispatch();
  return (
    <div className="cart">
      <div className="container">
        <h2 className="text-center">Your cart</h2>
        {products.length > 0 ? (
          <>
            <div className="row">
              <div className="col-9">
                {/* <div className="cart__heading">
                  <div className="row">
                    <div className="col-2">Picture</div>
                    <div className="col-2">Name</div>
                    <div className="col-2">Price</div>
                    <div className="col-2">Inc/Dec</div>
                    <div className="col-2">Total Price</div>
                    <div className="col-2">Remove</div>
                  </div>
                </div> */}
                {products.map((product) => (
                  <div className="row verticalAlign" key={product.id}>
                    <div className="col-2">
                      <div className="cart__image">
                        <img src={product.image} alt="" />
                      </div>
                    </div>
                    <div className="col-2">
                      <div className="cart__name"><h3>{product.title}</h3></div>
                    </div>

                    <div className="col-2">
                      <div className="details__info cart__incDec">
                        <div className="details__incDec">
                          <span
                            className="dec"
                            onClick={() =>
                              dispatch({ type: "DEC", payload: product.id })
                            }
                          >
                            <BsDash />
                          </span>
                          <span className="quantity">{product.quantity}</span>
                          <span
                            className="inc"
                            onClick={() =>
                              dispatch({ type: "INC", payload: product.id })
                            }
                          >
                            <BsPlus />
                          </span>
                        </div>
                      </div>
                    </div>
                   
                    <div className="col-2">
                      <div
                        className="cart__remove"
                        onClick={() =>
                          dispatch({ type: "REMOVE", payload: product.id })
                        }
                      >
                        <BsReverseBackspaceReverse />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="col-3 summary-col">
                <div className="summary">
                  <div className="summary__heading"><h2>Summary</h2></div>
                  <div className="summary__details">
                    <div className="row mb-10">
                      <div className="col-6"><h3>Total Items:</h3></div>
                      <div className="col-6"><h3>{totalQuantities}</h3></div>
                    </div>
                    <div className="row mb-10">
                      <div className="col-6"><h3>Total Price</h3></div>
                      <div className="col-6">
                        <h3>₹ {totalPrice * totalQuantities}</h3>
                      </div>
                    </div>
                    <button onClick={()=>navigate("/checkout")} type="button" className="checkout">
                      Checkout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          "Your cart is empty!"
        )}
      </div>
    </div>
  );
};
