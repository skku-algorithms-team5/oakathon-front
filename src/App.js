import './App.css';
import { Button } from 'antd';
import ChatBot from 'react-simple-chatbot';
function App() {
  return (
    <div className="App">
      <Button type="primary"></Button>
      <ChatBot
        floating={true}
        steps={[
          {
            id: 'analysis',
            message: '대충 너가 문제 푼 것에 대한 분석 결과',
            trigger: 'user-input'
          },
          {
            id: 'user-input',
            user: true,
            trigger: 'openai-assistant-answer'
          },
          {
            id: 'openai-assistant-answer',
            message: '대충 openai-assistant-answer',
            trigger: 'user-input'
          }
        ]}
      />
    </div>
  );
}

export default App;
