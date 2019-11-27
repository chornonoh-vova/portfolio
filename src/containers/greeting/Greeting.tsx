import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import './Greeting.css';

const StyledButton = withStyles({
  root: {
    margin: '16px',
    textTransform: 'uppercase',
  },
})(Button);

export default function Greeting() {
  return (
    <div className='greeting-main' id='greeting'>
      <div className='greeting-text-div'>
        <h1 className='greeting-text'>
          Hello <span role='img' aria-label='hello'>👋</span> I'm Chornonoh Volodymyr
        </h1>

        <p className='greeting-text-subtitle subtitle'>
          A passionate Full Stack Software Developer <span role='img' aria-label='space'>🚀</span>
          having an experience of building
          Web and Mobile applications with JavaScript / Angular / React / Nodejs / Java / Kotlin.
          Have an experience of building backend for Web and mobile applications,
          often for integration them with third-party services and APIs.
        </p>

        <div className='button-greeting-div'>
          <StyledButton variant='contained' color='primary' href='#contact'>
            Contact me
          </StyledButton>
          <StyledButton variant='contained' color='primary'
            href='https://drive.google.com/open?id=1jjMo-17-tkbu-g6Q8PDw8Fu2x1UGQknx'>
            See my resume
          </StyledButton>
        </div>
      </div>

      <div className='greeting-image-div'>
        <img alt='Greeting' src={require('../../assets/img/man-on-table.svg')}></img>
      </div>
    </div>
  );
}
