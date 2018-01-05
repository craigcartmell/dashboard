const dashboardRoutes = [
  '/',
  '/campaigns-upcoming',
  '/campaigns-by-business-unit-chart',
  '/campaigns-by-business-unit/1',
  '/campaigns-by-business-unit/2',
  '/campaigns-by-business-unit/3',
]

export const nextRouteIndex = index => index > dashboardRoutes.length - 1 ? 0 : index

export const routeByIndex = index => dashboardRoutes[index]