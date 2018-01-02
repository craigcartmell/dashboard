import React from 'react'
import _sample from 'lodash/sample'
import defaultConfig from 'tailwindcss/defaultConfig'

const Grid = ({ children }) => {
  const backgroundColor = randomColor()

  let index = 0
  const childrenWithProps = React.Children.map(children, child => {
    const backgroundColorWithVariant = `${backgroundColor}${nextColorVariant(index)}`

    index++

    return React.cloneElement(child, { backgroundColor: color(backgroundColorWithVariant) })
  })

  return <div className={"flex w-full h-full"}>
    { childrenWithProps }
  </div>
}

const randomColor = () => {
  const colors = [
    'teal',
    'blue',
    'indigo',
    // 'purple',
    'pink',
    // 'yellow',
    'green',
    'orange',
    // 'red',
  ]

  return _sample(colors)
}

const nextColorVariant = index => {
  const variants = [
    '-dark',
    '',
    '-light',
    '-lighter',
  ]

  index = index > variants.length - 1 ? 0 : index

  return variants[index]
}

const color = (key) => defaultConfig().colors[key]

export default Grid