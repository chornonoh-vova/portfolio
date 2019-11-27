import React from 'react';

import './Skills.css';

import SoftwareSkills from '../../components/software-skills/SoftwareSkills';

export default function Skills() {
  return (
    <div className='skills-main' id='skills'>
      <div className='skills-main-div'>
        <div className='skills-image-div'>
          <img
            alt='Developer activity'
            src={require('../../assets/img/developer-activity.svg')}>
          </img>
        </div>
        <div className='skills-text-div'>
          <h1 className='skills-heading'>
            What i do
          </h1>

          <p className='subtitle skills-text-subtitle'>
            Full Stack developer, who never ends learning something new
          </p>

          <SoftwareSkills />
        </div>
      </div>
    </div >
  );
}
