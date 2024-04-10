import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import '@/index.css'
// antd部分
import { ConfigProvider } from "antd"
import "dayjs/locale/zh-cn"
import zhCN from "antd/locale/zh_CN"

// 将 ReactDOM 创建的 Root 渲染到 DOM 中
ReactDOM.createRoot(document.getElementById('root')!).render(
  <ConfigProvider locale={zhCN}>
     <App />
   </ConfigProvider>
)
