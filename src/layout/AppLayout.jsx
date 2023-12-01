import { Routes, Route } from 'react-router-dom';

import { Layout, theme } from 'antd';

import SideMenu from './SideMenu';
import VideoPage from '../video-page/VideoPage';
import QuizPage from '../quiz-page/QuizPage';

const { Header, Content, Footer } = Layout;

const AppLayout = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: '100vh' }}>
      {/* Sider */}
      <SideMenu />
      <Layout>
        {/* Header */}
        <Header
          style={{
            margin: '8px 8px 0px',
            padding: '0px 16px',
            background: colorBgContainer,
            fontFamily: 'D2coding',
            height: 60,
          }}
        >
          <div
            style={{
              fontFamily: 'monospace',
              fontSize: 30,
              fontWeight: 'bold',
            }}
          >
            Algorithm{' '}
            <span style={{ fontSize: 30, color: 'gray' }}>
              - Instructor (Professor Oak)
            </span>
          </div>
        </Header>
        {/* Content */}
        <Content
          style={{
            margin: '8px 8px 0',
            backgroundColor: '#001529',
          }}
        >
          <div
            style={{
              padding: 10,
              background: colorBgContainer,
              minHeight: '100%',
            }}
          >
            <Routes>
              <Route path="/" element={<VideoPage />} />
              <Route path="/quiz" element={<QuizPage />} />
            </Routes>
          </div>
        </Content>
        {/* Footer */}
        <Footer
          style={{
            textAlign: 'center',
            padding: '16px 0',
          }}
        >
          19대장
        </Footer>
      </Layout>
    </Layout>
  );
};

export default AppLayout;
