import './Hero.css'
import handicon from "../assets/images/hand-icon.png"
import modelImg from "../assets/images/model.png"
import EastTwoToneIcon from '@mui/icons-material/EastTwoTone';

const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
        <h2>NEW ARRIVALS ONLY</h2>
        <div className="hero-hand-icon">
            <p>new</p>
         
            <img src={handicon} alt="hand-icon" />
        </div>
        <p>Collections</p>
        <p>for everyone</p>
        <div className="hero-latest-btn">
             <div>Latest Collection</div>
            <EastTwoToneIcon/>
        </div>
        </div>
        <div className="hero-right">
            <img src={modelImg} alt="" />
        </div>
    </div>
  )
}

export default Hero