// Social.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter, faInstagram, faLinkedin, faMedium } from '@fortawesome/free-brands-svg-icons';

const Social = () => {
  return (
    <nav className="fixed top-1/2 left-0 transform -translate-y-1/2 h-1/4 w-16 bg-gray-800 flex flex-col items-center justify-center p-4">
      <div className="flex flex-col items-center">
        <a
          href="https://github.com/JeffMuthunga"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-2xl mb-4 hover:text-gray-400"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          href="https://twitter.com/Muthunga2"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-2xl mb-4 hover:text-gray-400"
        >
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a
          href="https://www.instagram.com/am.wainaina/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-2xl mb-4 hover:text-gray-400"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a
          href="https://www.linkedin.com/in/jeff-muthunga-049469234/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-2xl mb-4 hover:text-gray-400"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a
          href="https://medium.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-2xl mb-4 hover:text-gray-400"
        >
          <FontAwesomeIcon icon={faMedium} />
        </a>
      </div>
    </nav>
  );
};

export default Social;
