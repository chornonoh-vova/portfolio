import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faHtml5, faCss3Alt, faJs, faReact, faNode, faPython, faDocker, faJava, faAndroid, faAngular, faLinux } from '@fortawesome/free-brands-svg-icons';

interface Skill {
  name: string;
  icon: JSX.Element;
}

const languageSkills: Skill[] = [
  {
    name: 'Linux',
    icon: <FontAwesomeIcon icon={faLinux} />,
  },
  {
    name: 'HTML5',
    icon: <FontAwesomeIcon icon={faHtml5} />,
  },
  {
    name: 'CSS3',
    icon: <FontAwesomeIcon icon={faCss3Alt} />,
  },
  {
    name: 'Java',
    icon: <FontAwesomeIcon icon={faJava} />,
  },
  {
    name: 'Android',
    icon: <FontAwesomeIcon icon={faAndroid} />,
  },
  {
    name: 'JavaScript',
    icon: <FontAwesomeIcon icon={faJs} />,
  },
  {
    name: 'React',
    icon: <FontAwesomeIcon icon={faReact} />,
  },
  {
    name: 'Node.js',
    icon: <FontAwesomeIcon icon={faNode} />,
  },
  {
    name: 'Angular',
    icon: <FontAwesomeIcon icon={faAngular} />,
  },
  {
    name: 'Python',
    icon: <FontAwesomeIcon icon={faPython} />,
  },
  {
    name: 'Docker',
    icon: <FontAwesomeIcon icon={faDocker} />,
  }
];

export default languageSkills;
