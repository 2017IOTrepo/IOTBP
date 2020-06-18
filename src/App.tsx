import React, { CSSProperties, useEffect } from 'react'
import './App.css'
import { Col, Row } from 'antd'
import DisplayComponent from './comonents/display'
import DebugComponent from './comonents/debug'
import { AppContext } from './hooks/props'
import { useStoreData } from './hooks/prop_hooks'

export const App = () => {
  const [storeSender, setStoreSender] = useStoreData()
  const [storeReceiver, setStoreReceiver] = useStoreData()

  useEffect(() => {
    console.log()
  })

  const colStyle: CSSProperties = {
    marginTop: '2%'
  }

  return (
    <AppContext.Provider value={{
      storeSender,
      setStoreSender,
      storeReceiver,
      setStoreReceiver
    }}>
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
    </AppContext.Provider>
  )
}
