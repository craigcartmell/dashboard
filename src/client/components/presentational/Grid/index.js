import React from 'react'
import styles from './grid.css'

const Grid = ({ children }) =>
  <div className={styles.grid + " flex md:flex-row flex-wrap"}>
    { children }
  </div>

export default Grid