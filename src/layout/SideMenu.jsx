import React from 'react';

import { Layout, Menu } from 'antd';
import { UserOutlined, FormOutlined } from '@ant-design/icons';
import './SideMenu.css';

const { Sider } = Layout;

const getItem = (label, key, icon = null, children = null, type = 'title') => {
  return {
    label,
    key,
    icon,
    children,
    type,
  };
};

const SideMenu = () => {
  const items = [
    getItem('강의 보기', '강의 보기', <FormOutlined />, null, 'note-list'),
    getItem('마이 페이지', '마이 페이지', <UserOutlined />, null, 'item'),
  ];

  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={(broken) => {
        //console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        //console.log(collapsed, type);
      }}
      width={'240px'}
    >
      <div className="side-menu-logo">PTA</div>

      {/* 메뉴 목록 (노트, 마이페이지) */}
      <Menu theme="dark" mode="inline" items={items} className="custom-menu" />
    </Sider>
  );
};
export default SideMenu;
