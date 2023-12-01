import { ThemeProvider } from 'styled-components';
import ChatBot from 'react-simple-chatbot';
import PersonalTAReq from './PersonalTAReq';
import React from 'react';

// all available props
const theme = {
  background: '#fff',
  fontFamily: 'monospace',
  headerBgColor: '#67b279',
  headerFontColor: '#fff',
  headerFontSize: '15px',
  botBubbleColor: '#bbe0bf',
  botFontColor: '#fff',
  userBubbleColor: '#67b279',
  userFontColor: '#fff',
};

const ThemedPersonalTA = () => (
  <ThemeProvider theme={theme}>
    <ChatBot
      headerTitle="Personal TA"
      height="800px"
      floating={true}
      steps={[
        {
          id: 'analysis',
          message: '대충 너가 문제 푼 것에 대한 분석 결과',
          trigger: 'user-input',
        },
        {
          id: 'user-input',
          user: true,
          trigger: 'openai-assistant-answer',
        },
        {
          id: 'openai-assistant-answer',
          component: <PersonalTAReq />,
          asMessage: true,
          trigger: 'user-input',
        },
      ]}
    />
  </ThemeProvider>
);

export default ThemedPersonalTA;
