import React from 'react'
import styles from './grid-item.css'

const GridItem = ({ children, className, title  }) =>
  <div className={styles.component + " " + className}>
    <h3 className={styles.title}>{title}</h3>
    { children }
  </div>

export default GridItem