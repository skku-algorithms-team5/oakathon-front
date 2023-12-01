import './App.css';
import { Button } from 'antd';
import AppLayout from './layout/AppLayout';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

function App() {
  return (
    // <div className="App">
    //   <Button type="primary"></Button>
    // </div>
    <RecoilRoot>
      <BrowserRouter>
        <AppLayout />
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
