import mqtt from 'mqtt'

/**
 * 存储的变量
 * 用于数据传递
 * */
export type storeData = {
  soilMoisture: number // 土壤湿度
  soilTemperature: number // 土壤温度
  waterLevel: number // 当前水位
  lowWaterLevel: boolean // 低水位状态
  pumpStatus: boolean // 水泵是否开启
  saveTimeStamp: string // 存储时间戳
  terminalStatus: boolean // 设备通信状态
  location: string // 地理位置
  autoOperation: boolean // 是否自动操作
  tempAlarm: boolean // 是否温度报警
  waterLevelAlarm: boolean // 是否水位报警
  exceptionAlarm: boolean // 是否异常报警
  tempThreshold: number // 温度阈值
  moistureThreshold: number // 湿度阈值
  waterLevelThreshold: number // 水位阈值
}

export let publishClient: mqtt.Client
export let subscribeClient: mqtt.Client

export const bindingPublishClient = (client: mqtt.Client) => {
  publishClient = client
}

export const bindingSubscribeClient = (client: mqtt.Client) => {
  subscribeClient = client
}
