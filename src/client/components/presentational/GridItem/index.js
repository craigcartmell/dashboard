import React from 'react'
import styles from './grid-item.css'

const GridItem = ({ children, index, title  }) =>
  <div className={`${styles.component} flex-1 max-w-sm overflow-hidden shadow-md`}>
    <div className={`${styles.titleContainer} px-4 py-4`}>
      <span className={`${styles.title} font-bold text-lg mb-2`}>{title}</span>
    </div>
    <div>
      { children }
    </div>
  </div>

export default GridItem