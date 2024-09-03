import "./Footer.css"
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-logo">
            <ShoppingCartIcon />
            <p>SHOPPER</p>
        </div>
        <ul className="footer-links">
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footer-social-icons">
            <div className="footer-icons-container">
               <InstagramIcon/>
            </div>
            <div className="footer-icons-container">
              <PinterestIcon/>
            </div>
            <div className="footer-icons-container">
                <WhatsAppIcon/>
            </div>
        </div>
        <div className="footer-copyright">
            <hr />
            <p>Copyright @ 2024 - All Rights Reserved</p>
        </div>
    </div>
  )
}

export default Footer