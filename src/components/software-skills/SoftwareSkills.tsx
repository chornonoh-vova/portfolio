import React from 'react';

import './SoftwareSkills.css';

import languageSkills from '../../data/language-skills';
import softwareSkills from '../../data/software-skills';

export default function SoftwareSkills() {
  return (
    <div>
      <div className='software-skills-main-div'>
        <ul className='dev-icons'>
          {
            languageSkills.map(skill => (
              <li className='software-skill-inline' key={skill.name}>
                {skill.icon}
              </li>
            ))
          }
        </ul>
      </div>

      <div>
        {
          softwareSkills.map((skill, index) => (
            <p className='subtitle skills-text' key={index}>{skill}</p>
          ))
        }
      </div>
    </div>
  );
}
