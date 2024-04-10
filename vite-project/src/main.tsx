import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from '@/pages/home/home.tsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import '@/app.scss'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
]);

// antd部分
import { ConfigProvider } from "antd"
import "dayjs/locale/zh-cn"
import zhCN from "antd/locale/zh_CN"

// 将 ReactDOM 创建的 Root 渲染到 DOM 中
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ConfigProvider locale={zhCN}>
      <RouterProvider router={router} />
    </ConfigProvider>
  </React.StrictMode>
)
