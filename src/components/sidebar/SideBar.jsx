import React, { useState } from 'react';
import { FaCloudSunRain } from "react-icons/fa";
import { TfiMenuAlt } from "react-icons/tfi";
import { HiMap } from "react-icons/hi";
import { RiSettings5Line } from "react-icons/ri";
import {Layout, Menu } from 'antd';
import { NavLink, Outlet } from 'react-router';
import Header from '../header/Header';
const { Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem('Weather', '1', <FaCloudSunRain/>),
  getItem('Cities', '7', <TfiMenuAlt />,[
    getItem('Lagos', '17'),
    getItem('Abuja', '18'),
    getItem('Dubai', '19'),
    getItem('New York', '20'),
    getItem('Japan', '21'),
  ]),
  getItem('Map', 'sub1', <HiMap />),
  getItem('Settings', 'sub1', <RiSettings5Line />),
   
];

const SideBar = () => {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <Layout
      style={{
        minHeight: '100vh',
        minWidth: '100vw',
      }}
    >
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="demo-logo-vertical" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
      </Sider>
      <Layout>
        <Header />
        <Content
          style={{
            margin: '0 16px',
          }}
        >
          <div
            style={{
              padding: 10,
              height: 'max-content'
            }}
          >
            <Outlet />
          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default SideBar;