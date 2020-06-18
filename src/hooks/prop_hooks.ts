import { Dispatch, SetStateAction, useState } from 'react'
import { storeData } from '../store'

/**
 * 封装disable属性
 * */
export const useDisableSetter = function(): [boolean, (() => void)] {
  const [available, setAvailable] = useState(false)
  return [
    available,
    () => {
      setAvailable(!available)
    }
  ]
}

export const useStoreData = function():
  [storeData, Dispatch<SetStateAction<storeData>>] {
  const [store, setStore] = useState<storeData>(
    {
      soilMoisture: 0, // 土壤湿度
      soilTemperature: 0, // 土壤温度
      waterLevel: 0, // 当前水位
      lowWaterLevel: true, // 低水位状态
      pumpStatus: true, // 水泵是否开启
      saveTimeStamp: '', // 存储时间戳
      terminalStatus: true, // 设备通信状态
      location: '', // 地理位置
      autoOperation: true, // 是否自动操作
      tempAlarm: true, // 是否温度报警
      waterLevelAlarm: true, // 是否水位报警
      exceptionAlarm: true, // 是否异常报警
      tempThreshold: 0, // 温度阈值
      moistureThreshold: 0, // 湿度阈值
      waterLevelThreshold: 0 // 水位阈值
    }
  )
  return [store, setStore]
}
