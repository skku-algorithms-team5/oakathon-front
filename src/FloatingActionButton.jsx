import React from 'react';
import { CommentOutlined } from '@ant-design/icons';
import { FloatButton } from 'antd';

const FloatingActionButton = () => {
  return (
    <FloatButton
      icon={<CommentOutlined />}
      tooltip={<div>Personal TA</div>}
      onClick={() => console.log('click')}
    />
  );
};

export default FloatingActionButton;
