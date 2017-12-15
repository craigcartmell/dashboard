import React from 'react'
import { withRouter } from 'react-router-dom'
import styles from './app.css'

const dashboardRoutes = [
  '/',
  '/campaigns-by-business-unit/1',
  '/campaigns-by-business-unit/2',
]

class App extends React.Component {
   state = {
    lastRouteIndex: 0,
  }

  componentDidMount() {
    const {history} = this.props

    setInterval(() => {
      let nextRouteIndex = this.state.lastRouteIndex + 1

      if (nextRouteIndex > dashboardRoutes.length) {
        nextRouteIndex = 0
      }

      const nextRoute = dashboardRoutes[nextRouteIndex]

      this.setState({
        lastRouteIndex: nextRouteIndex,
      })

      return history.push(nextRoute)
    }, 10000)
  }

  render() {
    return <div className={styles.component}>
      {this.props.children}
    </div>
  }
}

export default withRouter(App)