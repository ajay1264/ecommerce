
import { useContext } from 'react';
import './ProductDisplay.css'
import GradeIcon from '@mui/icons-material/Grade';
import { ShopContext } from '../../context/ShopContext';


const ProductDisplay = (props) => {
    const {product} = props;
    const {addToCart} = useContext(ShopContext)
  return (
    <div className='productdisplay'>
        <div className="productdisplay-left">
            <div className="productdisplay-img-list">
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
            </div>
            <div className="productdisplay-img">
                <img src={product.image} alt="" className="productdisplay-main-img" />
            </div>
        </div>
        <div className="productdisplay-right">
            <h1>{product.name}</h1>
            <div className="productdisplay-right-stars">
                <GradeIcon style={{color: 'goldenrod'}}/>
                <GradeIcon style={{color: 'goldenrod'}}/>
                <GradeIcon style={{color: 'goldenrod'}}/>
                <GradeIcon style={{color: 'goldenrod'}}/>
                <GradeIcon style={{color: 'goldenrod'}}/>
                <p>(122)</p>
            </div>
            <div className="productdisplay-right-prices">
                <div className="productdisplay-right-prices-old">
                    ${product.old_price}
                </div>
                <div className="productdisplay-right-price-new">
                    ${product.new_price}
                </div>
            </div>
                <div className="productdisplay-right-description">
                    A lightweight, usually knittedm pullover shirt, close-fitting and a round neckline and short sleeves, worn as a undershirt or outer garment. 
                </div>
                <div className="productdisplay-right-size">
                    <h1>Select Size</h1>
                   <div className="productdisplay-right-sizes">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXl</div>
                    </div> 
                </div>
                <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
                <p className="productdisplay-right-category">
                    <span>Category :</span>
                </p>
                <p className="productdisplay-right-category">
                    <span>Tags :</span>Modern, Latest
                </p>

        </div>
    </div>
  )
}

export default ProductDisplay