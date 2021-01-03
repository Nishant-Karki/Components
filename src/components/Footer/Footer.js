import { Typography, Box, Container } from '@material-ui/core';
import React from 'react';

import { FaFacebook, FaInstagram, FaGoogle } from 'react-icons/fa';
import { FiTwitter } from 'react-icons/fi';

import { Link } from 'react-router-dom';
import FooterSujan from './FooterSujan';
import './footer.scss';

function Footer() {
  return (
    <>
      <div className='root'>
        <Container className='container'>
          <Typography align='center'>Logo</Typography>
          <hr style={{ backgroundColor: 'white' }} />
          <Box className='footer'>
            <Typography>
              Brand Name &copy;{new Date().getFullYear()}.
            </Typography>
            <ul>
              <li>
                <Link to='/' className='icon'>
                  <FaFacebook />
                </Link>
              </li>
              <li>
                <Link to='/' className='icon'>
                  <FaInstagram />
                </Link>
              </li>

              <li>
                <Link to='/' className='icon'>
                  <FaGoogle />
                </Link>
              </li>
              <li>
                <Link to='/' className='icon'>
                  <FiTwitter />
                </Link>
              </li>
            </ul>
          </Box>
        </Container>
      </div>
      <FooterSujan />
    </>
  );
}

export default Footer;
