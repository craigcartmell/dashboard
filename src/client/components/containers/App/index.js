import React from 'react'
import styles from './app.css'

const App = ({children}) =>
  <div className={styles.component}>
    {children}
  </div>

export default App