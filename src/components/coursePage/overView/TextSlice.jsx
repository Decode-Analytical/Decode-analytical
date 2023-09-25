import React, { useState } from 'react'

export const TextSlice = ({ text, className }) => {
    const [showMore, setShowMore] = useState(false);
    const maxParagraphs = 3
    
    const paragraphs = text.split('\n')
    const trimeParagraph = paragraphs.map((paragraph) => paragraph.trim())

    showMore ? trimeParagraph : trimeParagraph.slice(0, maxParagraphs) 
  
    return (
      <div className={className}>
        {showMore ? 
            trimeParagraph.map((paragraph, index) => (
                <p key={index}>
                    {paragraph}
                </p>
            ))
            :
            trimeParagraph.slice(0, maxParagraphs).map((paragraph, index) => (
                <p key={index}>
                    {paragraph}
                </p>
            ))
        }
        <button type="button" onClick={() => setShowMore(!showMore)} className="text-sm font-bold border-none" >
            {showMore ? 'Show less' : 'Show more'}
        </button>
      </div>
    );
}
