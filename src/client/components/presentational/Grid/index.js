import React from 'react'
import styles from './grid.css'

const Grid = ({ children }) =>
  <div className={"flex"}>
    { children }
  </div>

export default Grid