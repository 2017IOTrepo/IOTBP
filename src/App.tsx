import React, { CSSProperties, useEffect } from 'react'
import './App.css'
import { Col, Row } from 'antd'
import DisplayComponent from './comonents/display'
import DebugComponent from './comonents/debug'

export const App = () => {
  useEffect(() => {
    console.log()
  })

  const colStyle: CSSProperties = {
    marginTop: '5%'
  }

  return (
    <div className={'container'}>
      <Row>
        <Col span={12} style={colStyle}>
          <DisplayComponent/>
        </Col>
        <Col span={12} style={colStyle}>
          <DebugComponent/>
        </Col>
      </Row>
    </div>
  )
}
