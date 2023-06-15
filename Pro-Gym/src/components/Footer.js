import React from 'react'
import './Footer.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {
  return (
    <div className='footer'> 
        <div className='socialMedia'>
          <InstagramIcon /> <TwitterIcon /> <FacebookIcon /> <LinkedInIcon />
        </div>
        <p>Made with <span>😎️</span> </p>
        <p>© 2023 All Rights Reserved.</p>
    </div>
  )
}

export default Footer;