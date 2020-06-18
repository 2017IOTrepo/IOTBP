import React, { CSSProperties, useContext, useEffect } from 'react'
import { Space, Typography, Card, Statistic } from 'antd'
import { AppContext, context } from '../hooks/props'

const { Title } = Typography

/**
 * 展示栏
 * */
const DisplayComponent = () => {
  const data = useContext(AppContext) as context

  useEffect(() => {
    console.log('display refresh')
  })

  const cardCSS: CSSProperties = {
    width: '200px'
  }

  return (
    <Space direction={'vertical'}>
      <Title>
        mqtt数据展示框
      </Title>
      <Space>
        <Card style={cardCSS}>
          <Statistic
            title={'土壤湿度'}
            value={data.storeReceiver.soilMoisture}
            precision={2}
            suffix={'rh'}
          />
        </Card>
        <Card style={cardCSS}>
          <Statistic
            title={'土壤温度'}
            value={data.storeReceiver.soilTemperature}
            precision={2}
            suffix={'℃'}
          />
        </Card>
        <Card style={cardCSS}>
          <Statistic
            title={'当前水位'}
            value={data.storeReceiver.waterLevel}
            precision={2}
            suffix={'%'}
          />
        </Card>
      </Space>
      <Space>
        <Card style={cardCSS}>
          <Statistic
            title={'水位状态'}
            value={data.storeReceiver.lowWaterLevel ? '低水位' : '高水位'}
          />
        </Card>
        <Card style={cardCSS}>
          <Statistic
            title={'水泵是否开启'}
            value={data.storeReceiver.pumpStatus ? '已开启' : '未开启'}
          />
        </Card>
        <Card style={cardCSS}>
          <Statistic
            title={'设备通信状态'}
            value={data.storeReceiver.terminalStatus ? '连接成功' : '连接失败'}
          />
        </Card>
      </Space>
      <Space>
        <Card style={cardCSS}>
          <Statistic
            title={'地理位置'}
            value={data.storeReceiver.location}
          />
        </Card>
        <Card style={cardCSS}>
          <Statistic
            title={'土壤湿度'}
            value={data.storeReceiver.soilMoisture}
            precision={2}
            suffix={'rh'}
          />
        </Card>
        <Card style={cardCSS}>
          <Statistic
            title={'是否自动操作'}
            value={data.storeReceiver.autoOperation ? '是' : '否'}
          />
        </Card>
      </Space>
      <Space>
        <Card style={cardCSS}>
          <Statistic
            title={'是否温度报警'}
            value={data.storeReceiver.tempAlarm ? '是' : '否'}
          />
        </Card>
        <Card style={cardCSS}>
          <Statistic
            title={'是否水位报警'}
            value={data.storeReceiver.waterLevelAlarm ? '是' : '否'}
          />
        </Card>
        <Card style={cardCSS}>
          <Statistic
            title={'是否异常报警'}
            value={data.storeReceiver.exceptionAlarm ? '是' : '否'}
          />
        </Card>
      </Space>
      <Space>
        <Card style={cardCSS}>
          <Statistic
            title={'温度阈值'}
            value={data.storeReceiver.tempThreshold}
            precision={2}
            suffix={'℃'}
          />
        </Card>
        <Card style={cardCSS}>
          <Statistic
            title={'湿度阈值'}
            value={data.storeReceiver.moistureThreshold}
            precision={2}
            suffix={'rh'}
          />
        </Card>
        <Card style={cardCSS}>
          <Statistic
            title={'水位阈值'}
            value={data.storeReceiver.waterLevelThreshold}
            precision={2}
            suffix={'%'}
          />
        </Card>
      </Space>
    </Space>
  )
}

export default DisplayComponent
