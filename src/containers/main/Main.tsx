import React, { Component } from 'react';

import Greeting from '../greeting/Greeting';
import Skills from '../skills/Skills';

/**
 * Main container class
 */
export default class Main extends Component {
  render() {
    return (
      <div>
        <Greeting />
        <Skills />
      </div>
    );
  }
}
