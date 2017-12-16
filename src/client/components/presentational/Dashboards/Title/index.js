import React from 'react'
import styles from './title.css'

const Title = ({title}) =>
  <div className={styles.component + " font-bold text-xl p-4"}>
    {title}
  </div>

export default Title