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
            id: 'hello-world',
            message: 'Hello World!',
            end: true
          }
        ]}
      />
    </div>
  );
}

export default App;
