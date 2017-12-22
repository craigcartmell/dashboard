import React from 'react'

import styles from './grid-item.css'

const GridItem = ({ children, index, title  }) =>
  <div className={`${styles.component} flex-1 max-w-sm overflow-hidden shadow-md text-white`}>
    <div className='px-4 py-4'>
      <span className={'font-bold text-grey-darkest text-lg mb-2'}>{title}</span>
    </div>
    <div>
      { children }
    </div>
  </div>

export default GridItem