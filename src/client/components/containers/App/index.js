import React from 'react'
import { withRouter } from 'react-router-dom'
import {nextRouteIndex, routeByIndex} from "../../../helpers/dashboard"
import styles from './app.css'

class App extends React.Component {
  componentDidMount() {
    const {history} = this.props

    setInterval(() => {
      const routeIndex = nextRouteIndex(this.state.lastRouteIndex + 1)
      const nextRoute = routeByIndex(routeIndex)

      return history.push(`${nextRoute}?lastRouteIndex=${routeIndex}`)
    }, 10000)
  }

  render() {
    return <div className={styles.component}>
      {this.props.children}
    </div>
  }
}

export default withRouter(App)