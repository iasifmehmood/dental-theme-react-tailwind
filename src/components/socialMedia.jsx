import React, { useState } from 'react';
import { tw } from 'twind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

const SocialMediaToggle = () => {
  const [isMaximized, setIsMaximized] = useState(true);

  const toggleMaximize = () => {
    setIsMaximized(prev => !prev);
  };

  return (
    <div
      className={tw`
        fixed top-1/2 right-0 transform transition-transform
        ${
          isMaximized
            ? '-translate-y-1/2 translate-x-0'
            : '-translate-y-1/2 translate-x-0'
        }
        flex flex-col items-center
      `}
    >
      <button
        onClick={toggleMaximize}
        className={tw`bg-gray-800 text-white py-2 px-4 rounded-full mb-2`}
      >
        {isMaximized ? '-' : '+'}
      </button>
      {isMaximized && (
        <div className={tw`space-y-4`}>
          {/* Add your social media icons here */}
          <a
            href='facebook.com'
            className={tw`bg-gray-800 text-white rounded-full w-10 h-10 flex items-center justify-center`}
          >
            {/* Replace with your social media icon */}
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a
            href='twitter.com'
            className={tw`bg-gray-800 text-white rounded-full w-10 h-10 flex items-center justify-center`}
          >
            {/* Replace with your social media icon */}
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a
            href='instagram.com'
            className={tw`bg-gray-800 text-white rounded-full w-10 h-10 flex items-center justify-center`}
          >
            {/* Replace with your social media icon */}
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          {/* Add more social media icons */}
        </div>
      )}
    </div>
  );
};

export default SocialMediaToggle;
