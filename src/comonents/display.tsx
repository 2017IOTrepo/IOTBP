import React, { useEffect } from 'react'
import { Space, Typography } from 'antd'

const { Title } = Typography

/**
 * 展示栏
 * */
const DisplayComponent = () => {
  useEffect(() => {
    console.log('display refresh')
  })

  return (
    <Space direction={'vertical'}>
      <Title>
        mqtt展示框
      </Title>
    </Space>
  )
}

export default DisplayComponent
