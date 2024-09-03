import { useContext } from "react"
import "./CSS/ShopCategory.css"
import { ShopContext } from "../context/ShopContext"
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';
import Item from "../components/Items/Item";


const ShopCategory = (props) => {

  const { all_products} = useContext(ShopContext);
  console.log('All products:', all_products);
  
  return (
    <div className='shop-category'>
      <img className="shopCategroy-banner" src={props.banner} alt="" />
      <div className="shopCategory-indexSort">
        <p>
          <span>Showing 1-12 </span>out of 35 products
        </p>
        <div className="shopCategory-sort">
          Sort by <ArrowDropDownCircleIcon />
        </div>
      </div>
      <div className="shopCategory-products">
        { all_products.map((item,i)=>{
            if (props.category === item.category) {
              return <Item 
              key={i} 
              id={item.id}
              name={item.name} 
              image={item.image} 
              new_price={item.new_price} 
              old_price={item.old_price}/>
            }
            else{
              return null
        }
        })}
      </div>
      <div className="shopCategory-loadmore">
        Explore More
      </div>
    </div>
  )
}

export default ShopCategory







// import React, { useContext, useState } from 'react';
// import { ShopContext } from '../context/ShopContext';
// import './CSS/ShopCategory.css'; // Ensure you have this CSS file

// const ShopCategory = () => {
//   const [selectedCategory, setSelectedCategory] = useState('all');
//   const { all_products } = useContext(ShopContext);

//   // Filter products based on selected category
//   const filteredProducts = selectedCategory === 'all'
//     ? all_products
//     : all_products.filter(product => product.category === selectedCategory);

//   return (
//     <div className="shop-category">
//       <div className="category-buttons">
//         <button onClick={() => setSelectedCategory('all')} className={selectedCategory === 'all' ? 'active' : ''}>All</button>
//         <button onClick={() => setSelectedCategory('men')} className={selectedCategory === 'men' ? 'active' : ''}>Men</button>
//         <button onClick={() => setSelectedCategory('women')} className={selectedCategory === 'women' ? 'active' : ''}>Women</button>
//         <button onClick={() => setSelectedCategory('kids')} className={selectedCategory === 'kids' ? 'active' : ''}>Kids</button>
//       </div>
//       <div className="products-grid">
//         {filteredProducts.length > 0 ? (
//           filteredProducts.map(product => (
//             <div key={product.id} className="product-card">
//               <img src={product.image} alt={product.name} />
//               <h3>{product.name}</h3>
//               <p>New Price: ${product.new_price.toFixed(2)}</p>
//               {product.old_price && <p className="old-price">Old Price: ${product.old_price.toFixed(2)}</p>}
//             </div>
//           ))
//         ) : (
//           <p>No products found.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ShopCategory;






























//THIS IS NEW CODE 
// import React, { useContext } from 'react';
// import { ShopContext } from '../context/ShopContext';
// import Item from '../components/Items/Item';
// import './CSS/ShopCategory.css';

// const ShopCategory = () => {
//   const { all_products } = useContext(ShopContext);
//   const [selectedCategory, setSelectedCategory] = React.useState('all');

//   // Filter products based on the selected category
//   const filteredProducts = selectedCategory === 'all' 
//     ? all_products
//     : all_products.filter(product => product.category === selectedCategory);

//   // Debugging information
//   console.log('All Products:', all_products);
//   console.log('Selected Category:', selectedCategory);
//   console.log('Filtered Products:', filteredProducts);

//   return (
//     <div>
//       <h2>Shop by Category</h2>
//       <select onChange={(e) => setSelectedCategory(e.target.value)}>
//         <option value="all">All</option>
//         <option value="men">Men</option>
//         <option value="women">Women</option>
//         <option value="child">Kids</option>
//       </select>
      
//       <div>
//         {filteredProducts.length > 0 ? (
//           filteredProducts.map(product => (
//             <Item
//               key={product.id}
//               id={product.id}
//               name={product.name}
//               image={product.image}
//               new_price={product.new_price}
//               old_price={product.old_price}
//             />
//           ))
//         ) : (
//           <p>No products available in this category.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ShopCategory;






