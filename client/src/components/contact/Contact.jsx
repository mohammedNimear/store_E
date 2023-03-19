import React from 'react'
import './contact.scss'
import PinterestIcon from '@mui/icons-material/Pinterest';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import TwitterIcon from '@mui/icons-material/Twitter';
const Contact = () => {
  return (
    <div className='contact'>
        <div className="wrapper">
            <span>BE IN TOUCH WITH ME: </span>
            <div className="mail">
                <input type="eail" placeholder="Enter your email" />
                <button>JOIN US</button>
            </div>
            <div className="icons">
                <FacebookIcon />
                <GoogleIcon />
                <TwitterIcon />
                <InstagramIcon />
                <PinterestIcon />

            </div>
        </div>
    </div>
  )
}

export default Contact