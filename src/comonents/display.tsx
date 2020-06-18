import React, { useEffect } from 'react'
import { Space } from 'antd'

/**
 * 展示栏
 * */
const DisplayComponent = () => {
  useEffect(() => {
    console.log('display refresh')
  })

  return (
    <Space direction={'vertical'}>
            bbb
    </Space>
  )
}

export default DisplayComponent
