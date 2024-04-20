import { useState } from 'react';
import Icon from '@mdi/react';
import { mdiChevronDown } from '@mdi/js';
import './Accordion.css';

function Accordion({ items }: { items: AccordionItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div className="accordion">
      {items.map((item, index) => (
        <div key={index} className="accordion-item">
          <div className="accordion-header">
            <button
              className={`accordion-button ${index === openIndex ? 'show' : 'collapse'}`}
              onClick={() => handleClick(index)}
            >
              {item.title}
              <Icon
                path={mdiChevronDown}
                size={1}
                className={`chevron ${index === openIndex ? 'show' : 'collapse'}`}
              />
            </button>
          </div>
          <div
            className={
              index === openIndex
                ? 'accordion-content show'
                : 'accordion-content collapse'
            }
          >
            {index === openIndex && item.content}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Accordion;
