import React, { useState } from 'react';
import '../components/styles/style.css'

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className='MainAccodionCon'>
      <div
        onClick={() => setIsActive(!isActive)}>
        <div className="AccodionHead">
          <div>{title}</div>
          <div>{isActive ? 'x' : '+'}</div>
        </div>
      </div>
      {isActive &&
        <div className="AccodionContent">{content}</div>
      }
    </div>
  );
};

export default Accordion;


