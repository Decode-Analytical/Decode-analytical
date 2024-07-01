import React, { useState } from 'react';

function TextTruncate({ text, maxLength }) {
  const [isTruncated, setIsTruncated] = useState(true);

  const toggleTruncate = () => {
    setIsTruncated(!isTruncated);
  };

  return (
    <div>
      {isTruncated ? (
        <div>
          {text.length > maxLength
            ? text.slice(0, maxLength) + '...'
            : text}
        </div>
      ) : (
        <div>{text}</div>
      )}
      {text.length > maxLength && (
        <button onClick={toggleTruncate} className='flex float-right px-2 border border-zinc-300'>
          {isTruncated ? 'More' : 'Less'}
        </button>
      )}
    </div>
  );
}

export default TextTruncate;
