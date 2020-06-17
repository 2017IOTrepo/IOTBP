import React, { useEffect } from 'react'
import './App.css'

export const App = () => {
  // 相当于 componentDidMount 和 componentDidUpdate:
  useEffect(() => {
    console.log('11')
  })

  return (
    <div className={'container'}>
    </div>
  )
}
