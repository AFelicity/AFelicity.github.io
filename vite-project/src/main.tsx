import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from '@/pages/home/home.tsx'
import ErrorPage from '@/error-page.tsx'
import Contact from "@/routes/contact";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import '@/app.scss'
import '@/pages/yx/yx.scss'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/contact/:contactId",
        element: <Contact />,
      },
    ]
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
