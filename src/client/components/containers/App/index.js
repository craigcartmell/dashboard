import React from 'react'
import { withRouter } from 'react-router-dom'
import styles from './app.css'

class App extends React.Component {
   state = {
    lastRouteIndex: 0,
  }

  static dashboardRoutes = [
    '/',
    '/campaigns-upcoming',
    '/campaigns-by-business-unit/1',
    '/campaigns-by-business-unit/2',
    '/campaigns-by-business-unit/3',
    '/campaigns-by-business-unit/4',
  ]

  componentDidMount() {
    const {history} = this.props

    setInterval(() => {
      let nextRouteIndex = this.state.lastRouteIndex + 1
      nextRouteIndex = nextRouteIndex > App.dashboardRoutes.length ? 0 : nextRouteIndex

      const nextRoute = App.dashboardRoutes[nextRouteIndex]

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