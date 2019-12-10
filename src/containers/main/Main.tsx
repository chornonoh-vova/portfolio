import React, { Component } from 'react';

import Greeting from '../greeting/Greeting';
import Skills from '../skills/Skills';
import Projects from '../projects/Projects';

/**
 * Main container class
 */
export default class Main extends Component {
  render() {
    return (
      <div>
        <Greeting />
        <Skills />
        <Projects />
      </div>
    );
  }
}
