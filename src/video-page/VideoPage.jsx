import { Card, Button } from 'antd';

const VideoPage = () => {
  const btn = (
    <div>
      <Button type="text" style={{ marginRight: 10, width: '45%', height: 40 }}>
        이전
      </Button>
      <Button type="text  " style={{ width: '45%', height: 40 }}>
        다음
      </Button>
    </div>
  );
  return (
    <div style={{ width: 1200, textAlign: 'center' }}>
      <Card style={{ fontSize: 20 }} title={btn}>
        <video muted autoPlay loop style={{ width: 1000 }} controls>
          <source src="/videos/bf1.mp4" type="video/mp4" />
        </video>
      </Card>
    </div>
  );
};

export default VideoPage;
