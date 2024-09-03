import React from 'react';
import PropTypes from 'prop-types';
import './Item.css';
import { Link } from 'react-router-dom'
const Item = ({ id, name, image, new_price, old_price }) => {
    return (
        <div className="item" id={`item-${id}`}>
          <Link to={`/product/${id}`}>  <img  onClick={window.scrollTo(0,0)} src={image} alt={name} />  </Link> 
            <p className="item-name">{name}</p>
            <div className="item-prices">
                <div className="item-prices-new">
                    ${new_price}
                </div>
                <div className="item-prices-old">
                    ${old_price}
                </div>
            </div>
        </div>
    );
};

Item.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    new_price: PropTypes.number.isRequired,
    old_price: PropTypes.number.isRequired
};

export default Item;














// import "./Item.css"
// import { Link } from 'react-router-dom';

// const Item = (props) => {
//   console.log('Item Image URL:', props.image);
//   return (
//     <div className="item">
//       <Link to={`/product/${props.id}`}>  <img onClick={window.scrollTo(0,0)} src={props.image} alt="" /></Link>
//         <p className="item-name">{props.name}</p>
//         <div className="item-prices">
//             <div className="item-prices-new">
//                 ${props.new_price}
//             </div>
//             <div className="item-prices-old">
//                 ${props.old_price}
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Item