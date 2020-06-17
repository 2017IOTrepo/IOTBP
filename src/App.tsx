import React, { CSSProperties, useEffect } from 'react'
import './App.css'
import mqtt from 'mqtt'
import { Col, Input, Row } from 'antd'

const { Search } = Input

type storeData = {

}

// 时间戳作clientid
const config: mqtt.IClientOptions = {
  clientId: 'publish sensor ' + Date.parse(new Date().toString()).toString(),
  username: 'emqx',
  password: 'public'
}

const config2: mqtt.IClientOptions = {
  clientId: 'subscribe client ' + Date.parse(new Date().toString()).toString(),
  username: 'emqx',
  password: 'public'
}

const publishClient: mqtt.Client = mqtt.connect('ws://39.105.110.28:8083/mqtt', config)
const subscribeClient: mqtt.Client = mqtt.connect('ws://39.105.110.28:8083/mqtt', config2)

const DisplayComponent = () => {
  return (
    <>
        aaa
    </>
  )
}

const DebugComponent = () => {
  return (
    <>
        aaa
    </>
  )
}

export const App = () => {
  useEffect(() => {
    console.log(publishClient)
    console.log(subscribeClient)
  })

  return (
    <div className={'container'}>
      <Row>
        <Col span={12}>
          <DisplayComponent/>
        </Col>
        <Col span={12}>
          <DebugComponent/>
        </Col>
      </Row>
    </div>
  )
}
