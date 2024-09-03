import PropTypes from 'prop-types';
import './Breadcrum.css';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const Breadcrum = (props) => {
  const { product } = props;

  return (
    <div className='breadcrum'>
      HOME <PlayArrowIcon />
      SHOP <PlayArrowIcon /> 
      {product.category} <PlayArrowIcon/>
      {product.name}
    </div>
  );
}

Breadcrum.propTypes = {
  product: PropTypes.shape({
    category: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default Breadcrum;






// import './Breadcrum.css'
// import PlayArrowIcon from '@mui/icons-material/PlayArrow';
// const Breadcrum = () => {
//     const {product} = props;
//   return (
//     <div className='breadcrum'>
//         HOME <PlayArrowIcon />
//          SHOP <PlayArrowIcon /> 
//          {product.category} <PlayArrowIcon/>
//          {product.name}
//     </div>
//   )
// }

// export default Breadcrum