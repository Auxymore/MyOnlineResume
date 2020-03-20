import React from "react";
import CopyrightIcon from '@material-ui/icons/Copyright';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';

function Footer(){

  const currentDate = new Date().getFullYear();

    return (
    <div class="bottom-container text-center"> 
      <a class="icon-social" href="https://www.linkedin.com/" target="_blank"><LinkedInIcon /></a>
      <a class="icon-social" href="https://twitter.com/" target="_blank"><TwitterIcon /></a>
      <a class="icon-social" href="https://sapiensshop.com" target="_blank"><InstagramIcon /></a>
      <p class="copyright"><CopyrightIcon /> {currentDate} Guillaume.</p>
    </div>
    );
}

export default Footer;