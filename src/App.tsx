import React, { CSSProperties, useEffect, useState, MouseEvent } from 'react'
import './App.css'
import mqtt from 'mqtt'
import { Col, Input, Row, Space, Button, message } from 'antd'

const { Search } = Input

type storeData = {

}

let publishClient: mqtt.Client
let subscribeClient: mqtt.Client

const DisplayComponent = () => {
  return (
    <>
        bbb
    </>
  )
}

const useDisableSetter = function(): [boolean, (() => void)] {
  const [available, setAvailable] = useState(false)
  return [
    available,
    () => {
      setAvailable(!available)
    }
  ]
}

const DebugComponent = () => {
  const [publishDisable, reversePublishDisable] = useDisableSetter()
  const [subscribeDisable, reverseSubscribeDisable] = useDisableSetter()

  const config: mqtt.IClientOptions = {
    clientId: '',
    username: 'emqx',
    password: 'public'
  }

  const handlePublishClick = (event: MouseEvent) => {
    config.clientId = 'publish client' + Date.parse(new Date().toString()).toString()
    publishClient = mqtt.connect('ws://39.105.110.28:8083/mqtt', config)
    publishClient.on('connect', () => {
      console.log(publishClient)
      message.success('发布用mqtt成功连接!')
      reversePublishDisable()
    })

    publishClient.on('error', (err: Error) => {
      message.error('发布用mqtt成功连接失败!原因：' + err.message)
    })
  }

  const handleSubscribeClick = (event: MouseEvent) => {
    config.clientId = 'subscribe client' + Date.parse(new Date().toString()).toString()
    subscribeClient = mqtt.connect('ws://39.105.110.28:8083/mqtt', config)
    subscribeClient.on('connect', () => {
      console.log(publishClient)
      message.success('订阅用mqtt成功连接!')
      reverseSubscribeDisable()
    })

    subscribeClient.on('error', (err: Error) => {
      message.error('订阅用mqtt成功连接失败!原因：' + err.message)
    })
  }

  useEffect(() => {
    console.log(publishDisable)
    console.log(subscribeDisable)
  })

  return (
    <Space direction={'vertical'}>
      <Space>
        <Button
          disabled={publishDisable as boolean}
          type='primary'
          onClick={handlePublishClick}>
            发布用mqtt连接
        </Button>
        <Button
          disabled={subscribeDisable as boolean}
          type='primary'
          onClick={handleSubscribeClick}>
            订阅用mqtt连接
        </Button>
      </Space>
    </Space>
  )
}

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
