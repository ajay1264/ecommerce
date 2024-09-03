import { useContext } from 'react'
import './CartItems.css'
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { ShopContext } from '../../context/ShopContext';

const CartItems = () => {
    const{getTotalCartAmount, all_products,cartItems, removeFromCart} = useContext(ShopContext);
    console.log(getTotalCartAmount);
    
  return (
    <div className='cartitems'>
        <div className="cartitems-format-main">
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr />
    {all_products.map((e)=>{
        if (cartItems[e.id]> 0) {
            return ( 
            <div key={e.id}> 
            <div className="cartitems-format cartitems-format-main">
                <img src={e.image} alt="" className="cartitems-product-icon" />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className="cartitems-quantity">{cartItems[e.id]}</button>
                <p>${e.new_price*cartItems[e.id]}</p>
                <RemoveCircleIcon
                 onClick={()=>{removeFromCart(e.id)}}
                  alt="" className="cartitems-remove-icon" />
            </div>
            <hr />
            </div>
            )
    }
    return null;
    })}
    <div className="cartitems-down">
        <div className="cartitems-total">
            <h1>Cart Totals</h1>
            <div>
                <div className="cartitems-total-items">
                    <p>SubTotal</p>
                    <p>${getTotalCartAmount()}</p>
                </div>
                <hr />
                <div className="cartitems-total-items">
                    <p>Shipping Fee</p>
                    <p>Free</p>
                </div>
                <hr />
                <div className="cartitems-total-items">
                    <h3>Total</h3>
                    <h3>${getTotalCartAmount()}</h3>
                </div>
            </div>
            <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cartitems-promocode">
            <p>If you have promo code, Enter it here</p>
            <div className="cartitems-promobox">
                <input type="text" placeholder='promo code' />
                <button>SUBMIT</button>
            </div>
        </div>
    </div>
    </div>
)
}

export default CartItems


{/* <div>
<div className="cartitems-format">
    <img src={ShopIcon} alt="" className="carticon-product-icon" />
    <p></p>
    <p></p>
    <button className="cartitems-quantity"></button>
    <p></p>
    <img src={RemoveIcon} onClick={()=>{removeFromCart()}} alt="" className="" />
</div>
</div> */}