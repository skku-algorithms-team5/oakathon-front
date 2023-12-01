import React from 'react';
import { useRecoilState } from 'recoil';
import { videoState } from '../recoil/atoms';
import { useNavigate } from 'react-router-dom';

import { Layout, Menu } from 'antd';
import { CaretRightOutlined, PlayCircleOutlined } from '@ant-design/icons';
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
  const [video, setVideo] = useRecoilState(videoState);
  const nav = useNavigate();

  const videoHandler = (e) => {
    setVideo(e.key);
    nav('/');
  };

  const items = [
    getItem(
      'Broute Force',
      'Broute Force',
      <CaretRightOutlined />,
      [
        getItem('Broute Force', 'bf1.mp4', <PlayCircleOutlined />),
        getItem('Selection/Bubble Sort', 'bf2.mp4', <PlayCircleOutlined />),
        getItem('String Matching', 'bf3.mp4', <PlayCircleOutlined />),
      ],
      'note-list',
    ),
    getItem(
      'Dynamic Programming',
      'Dynamic Programming',
      <CaretRightOutlined />,
      [
        getItem('Dynamic Programming', 'dp1.mp4', <PlayCircleOutlined />),
        getItem(
          'Longest Common Subsequence',
          'dp2.mp4',
          <PlayCircleOutlined />,
        ),
        getItem('Washer’s Algorithm', 'dp3.mp4', <PlayCircleOutlined />),
      ],
      'item',
    ),
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
      <Menu
        theme="dark"
        defaultOpenKeys={['Broute Force', 'Dynamic Programming']}
        selectedKeys={video}
        mode="inline"
        items={items}
        className="custom-menu"
        onClick={videoHandler}
      />
    </Sider>
  );
};
export default SideMenu;
