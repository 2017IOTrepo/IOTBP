import mqtt from 'mqtt'
import React, { MouseEvent, useContext, useEffect } from 'react'
import { Button, message, Space, Typography } from 'antd'
import { useDisableSetter } from '../hooks/prop_hooks'
import {
  bindingPublishClient,
  bindingSubscribeClient,
  publishClient,
  subscribeClient
} from '../store'
import { randomBetween, randomBoolean } from '../utils/rand'
import { AppContext, context } from '../hooks/props'

const { Title } = Typography

/**
 * Debug栏
 * */
const DebugComponent = () => {
  const [publishDisable, reversePublishDisable] = useDisableSetter()
  const [subscribeDisable, reverseSubscribeDisable] = useDisableSetter()

  const data = useContext(AppContext) as context

  useEffect(() => {
    console.log('debug refresh')
  })

  const config: mqtt.IClientOptions = {
    clientId: '',
    username: 'emqx',
    password: 'public'
  }

  const handlePublishClick = (event: MouseEvent) => {
    event.preventDefault()
    config.clientId = 'publish client' + Date.parse(new Date().toString()).toString()
    bindingPublishClient(mqtt.connect('wss://www.fivezha.cn::8084/mqtt', config))
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
    event.preventDefault()
    config.clientId = 'subscribe client' + Date.parse(new Date().toString()).toString()
    bindingSubscribeClient(mqtt.connect('wss://www.fivezha.cn::8084/mqtt', config))
    subscribeClient.on('connect', () => {
      console.log(publishClient)
      message.success('订阅用mqtt成功连接!')
      reverseSubscribeDisable()
      subscribeClient.subscribe('test', (err: Error) => {
        if (!err) {
          message.success('订阅成功!')
        } else {
          message.error('订阅失败!原因：' + err.message)
        }
      })
    })

    subscribeClient.on('error', (err: Error) => {
      message.error('订阅用mqtt成功连接失败!原因：' + err.message)
    })

    subscribeClient.on('message', (topic: string, msg: Buffer) => {
      message.success('收到来自' + topic + '的消息！')
      data.storeReceiver = JSON.parse(msg.toString())
      data.setStoreReceiver(data.storeReceiver)

      // excuteSQL('INSERT INTO mqtt_data_log(soilMoisture,\n' +
      //   'soilTemperature,\n' +
      //   'waterLevel,\n' +
      //   'lowWaterLevel,\n' +
      //   'pumpStatus,\n' +
      //   'saveTimeStamp,\n' +
      //   'terminalStatus,\n' +
      //   'location,\n' +
      //   'autoOperation,\n' +
      //   'tempAlarm,\n' +
      //   'waterLevelAlarm,\n' +
      //   'exceptionAlarm,\n' +
      //   'tempThreshold,\n' +
      //   'moistureThreshold,\n' +
      //   'waterLevelThreshold,\n' +
      //   'topic) VALUES(\n' +
      //   '0,0,0,1,1,1592491954000,1,\'11\',1,1,1,1,1,1,1,\'11\'\n' +
      //   ')',
      // [
      //   data.storeReceiver.soilMoisture,
      //   data.storeReceiver.soilTemperature,
      //   data.storeReceiver.waterLevel,
      //   data.storeReceiver.lowWaterLevel,
      //   data.storeReceiver.pumpStatus,
      //   data.storeReceiver.saveTimeStamp,
      //   data.storeReceiver.terminalStatus,
      //   data.storeReceiver.location,
      //   data.storeReceiver.autoOperation,
      //   data.storeReceiver.tempAlarm,
      //   data.storeReceiver.waterLevelAlarm,
      //   data.storeReceiver.exceptionAlarm,
      //   data.storeReceiver.tempThreshold,
      //   data.storeReceiver.moistureThreshold,
      //   data.storeReceiver.waterLevelThreshold,
      //   topic
      // ],
      // (err: any, results: any) => {
      //   if (err) {
      //     message.error('数据库插入失败!原因：' + err.message)
      //   } else {
      //     message.success('插入数据成功！')
      //   }
      // })
      console.log(topic + ':' + msg.toString())
    })
  }

  const handlePublishMessageClick = (event: MouseEvent) => {
    event.preventDefault()
    publishClient.publish('test', JSON.stringify(data.storeSender))
    message.success('消息已发送!')
  }

  const handleRandomMessage = (event: MouseEvent) => {
    event.preventDefault()
    data.storeSender = {
      autoOperation: randomBoolean(),
      exceptionAlarm: randomBoolean(),
      location: '暂无',
      lowWaterLevel: randomBoolean(),
      moistureThreshold: randomBetween(0, 80),
      pumpStatus: randomBoolean(),
      saveTimeStamp: Date.parse(new Date().toString()).toString(),
      soilMoisture: randomBetween(20, 60),
      soilTemperature: randomBetween(20, 40),
      tempAlarm: randomBoolean(),
      tempThreshold: randomBetween(0, 100),
      terminalStatus: randomBoolean(),
      waterLevel: randomBetween(0, 100),
      waterLevelAlarm: randomBoolean(),
      waterLevelThreshold: randomBetween(0, 100)
    }
    data.setStoreSender(data.storeSender)
    handlePublishMessageClick(event)
  }

  return (
    <Space direction={'vertical'}>
      <Title>
        mqtt数据调试框
      </Title>
      <Space>
        <Button
          disabled={publishDisable}
          type='primary'
          onClick={handlePublishClick}>
                    发布用mqtt连接
        </Button>
        <Button
          disabled={subscribeDisable}
          type='primary'
          onClick={handleSubscribeClick}>
                    订阅用mqtt连接
        </Button>
      </Space>
      <Space>
      </Space>
      <Space>
        <Button
          type={'primary'}
          disabled={!(subscribeDisable && publishDisable)}
          onClick={handlePublishMessageClick}
        >
          发布信息
        </Button>

        <Button
          disabled={!(subscribeDisable && publishDisable)}
          onClick={handleRandomMessage}
        >
          直接随机信息
        </Button>
      </Space>
    </Space>
  )
}

export default DebugComponent
