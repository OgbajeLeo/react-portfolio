import React, { useEffect, useState } from 'react'

const TypingAnimation = ({text}) => {
    const [displayText, setDisplayText] = useState('');

    useEffect(() => {
      let index = 0;
  
      const intervalId = setInterval(() => {
        if (index <= text.length) {
          setDisplayText(text.substring(0, index));
          index += 1;
        } else {
          clearInterval(intervalId);
        }
      }, 50);
  
      return () => clearInterval(intervalId);
    }, [text]);
  
    return <span className='text-blue-300'>{displayText}</span>;
  
}

export default TypingAnimation
