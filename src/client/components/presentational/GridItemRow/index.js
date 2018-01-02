import React from 'react'
import {alternatingRowStyle} from '../../../helpers'

const GridItemRow = ({children, index}) =>
  <div style={alternatingRowStyle(index)} className="w-full px-4 py-4 h-32">
    {children}
  </div>

export default GridItemRow