import React from 'react'

const GridItem = ({ backgroundColor, children, title  }) =>
  <div style={{backgroundColor}} className={`flex-1 max-w-sm overflow-hidden shadow-md text-white`}>
    <div className='px-4 py-4'>
      <span className={'font-bold text-white text-lg mb-2'}>{title}</span>
    </div>
    <div>
      { children }
    </div>
  </div>

export default GridItem