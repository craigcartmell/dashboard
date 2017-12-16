import React from 'react'
import styles from './grid-item.css'

const GridItem = ({ children, className, title  }) =>
  <div className={`${styles.component} flex-1 max-w-sm overflow-hidden shadow-sm`}>
    <div className={`${styles.titleContainer} px-2 py-2`}>
      <span className={`${styles.title} font-bold text-base mb-2`}>{title}</span>
    </div>
    <div className="px-3 py-3">
      { children }
    </div>
  </div>

export default GridItem